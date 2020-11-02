const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const client = require('../db/postgresql')
const auth = require('../middleware/auth')

const router = express.Router()

// register user
router.post('/user', async (req, res) => {
    try {
        const { name, email, password } = req.body
        const passwordHash = await bcrypt.hash(password, 8)

        const data = await client.query(`
            INSERT INTO users(name, email, password)
            SELECT '${name}', '${email}', '${passwordHash}'
                WHERE NOT EXISTS
                    (SELECT email FROM users WHERE email = '${email}')`)

        if (!data.rowCount) { throw { error: 'email exist' } }

        res.send({ success: 'user added!' })
    } catch (e) {
        res.send(e)
    }
})

// user login
router.post('/user/login', async (req, res) => {
    try {
        const { email, password } = req.body
        
        const { rows } = await client.query(`
            SELECT * FROM users
            WHERE email = '${email}'`)
            
        if (!rows.length) { throw { error: 'wrong email' } }

        const isMatch = await bcrypt.compare(password, rows[0].password)

        if (!isMatch) { throw { error: 'wrong password' } }

        const token = await jwt.sign({ email }, 'SECRET_KEYZ')
        await client.query(`
            UPDATE users
            SET token='${token}'
            WHERE email='${email}';`)

        res.send({ email, token })
    } catch (e) {
        res.send(e)
    }
})

// user logout
router.post('/user/logout', auth, async (req, res) => {
    await client.query(`
        UPDATE users
        SET token = null
        WHERE email = '${req.email}'`)
        .then((result) => res.send({ success: `${req.email} - user logout!` }))
        .catch((err) => res.send(err))
})

// get info user
router.get('/user', auth, async (req, res) => {
    await client.query(`
        SELECT * FROM users
        WHERE email = '${req.email}'`)
        .then(({ rows }) => res.send(rows[0]))
        .catch((err) => res.send(err))
})

// update info user (name)
router.put('/user', auth, async (req, res) => {
    await client.query(`
        UPDATE users
        SET name='${req.body.name}'
        WHERE email='${req.email}'`) 
        .then((result) => {
            if (!result.rowCount) { throw { error: 'user not found' } }
            res.send({ success: `${req.email} - user info updated!` }) })
        .catch((e) => res.send(e))
})

// delete user
router.delete('/user', auth, (req, res) => {
    client.query(`
        DELETE FROM users
        WHERE email='${req.email}'`)
        .then((result) => {
            if (!result.rowCount) { throw { error: 'user not found' } }
            res.send({ success: `${req.email} - user deleted!` }) })
        .catch((err) => res.send(err))
})

module.exports = router