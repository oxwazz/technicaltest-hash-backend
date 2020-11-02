const express = require('express')
const client = require('../db/postgresql')
const auth = require('../middleware/auth')

const router = express.Router()

// create user order
router.post('/order', auth, async (req, res) => {
    try {
        const { product_id, total  } = req.body
        let user_id = req.id
        let stock, price

        await client.query('BEGIN')

        const { rows } = await client.query(`
            SELECT stock, price
            FROM products
            WHERE id = ${product_id}`)
        
        stock = rows[0].stock
        price = rows[0].price
        
        // check stock-x cannot < 0
        if (stock-total < 0) { throw { error: 'stock tidak mencukupi!' } }

        // update stock = stock-x
        await client.query(`
            UPDATE products
            SET stock = stock-${total}
            WHERE id = ${product_id}`)
        
        // create order
        await client.query(`
            INSERT INTO orders(total, purchase_price, status, user_id, product_id)
            VALUES(${total}, ${price}*${total}, 'PENDING', ${user_id}, ${product_id})`)

        await client.query('COMMIT')
        res.send({ success: 'order added!' })
    } catch (e) {
        await client.query('ROLLBACK')
        res.send(e)
    }
})

// get user order
router.get('/order', auth, (req, res) => {
    client.query(`
        SELECT orders.id, users.email, products.product_name, orders.total, orders.purchase_price, orders.status
        FROM orders
        INNER JOIN users ON users.id = orders.user_id
        INNER JOIN products ON products.id = orders.product_id
        WHERE users.email = '${req.email}'`)
        .then(({ rows }) => res.send(rows))
        .catch((e) => res.send(e))
})

// edit all order
router.put('/order/:id', auth, (req, res) => {
    client.query(`
        UPDATE orders
        SET status = 'ACCEPT'
        WHERE id = '${req.params.id}'`) 
        .then((result) => {
            if (!result.rowCount) { throw { error: 'order not found' } }
            res.send({ success: '' }) })
        .catch((e) => res.send(e))
})

// delete all order
router.delete('/order/:id', auth, (req, res) => {
    client.query(`
        DELETE FROM orders
        WHERE id='${req.params.id}'`)
        .then((result) => {
            if (!result.rowCount) { throw { error: 'order not found' } }
            res.send({ success: '' }) })
        .catch((e) => res.send(e))
})

module.exports = router