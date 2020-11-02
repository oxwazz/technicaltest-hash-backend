const jwt = require('jsonwebtoken')
const client = require('../db/postgresql')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = await jwt.verify(token, 'SECRET_KEYZ')
        
        const { rows } = await client.query(`
            SELECT * FROM users
            WHERE email = '${decoded.email}' AND token = '${token}'`)
        
        if (!rows.length) { throw { error: 'login terlebih dahulu' } }
            
        req.id = rows[0].id
        req.email = decoded.email

        next()
    } catch (e) {
        res.send(e)
    }
}

module.exports = auth