const express = require('express')
const client = require('../db/postgresql')
const auth = require('../middleware/auth')

const router = express.Router()

// create product
router.post('/product', auth, async (req, res) => {
    const { product_name, stock, price } = req.body

    client.query(`
        SELECT * FROM products
        WHERE product_name = '${product_name}'`)
        .then(({ rows }) => {
            if (rows.length) { throw { error: 'product exist' } }
            return client.query(`
                INSERT INTO products(product_name, stock, price)
                VALUES('${product_name}', '${stock}', '${price}')`)})
        .then(() => res.send({ success: `${product_name} - added!` }))
        .catch((e) => res.send(e))
})

// read products
router.get('/product', auth, (req, res) => {
    client.query('SELECT * FROM products')
        .then(({ rows }) => res.send(rows))
        .catch((e) => res.send(e))
})

// edit product
router.put('/product/:id', auth, (req, res) => {
    const { product_name, stock, price } = req.body

    client.query(`
        UPDATE products
        SET product_name = '${product_name}',
            stock = ${stock},
            price = ${price}
        WHERE id = '${req.params.id}'`) 
        .then((result) => {
            if (!result.rowCount) { throw { error: 'product not found' } }
            res.send({ success: `ID:${req.params.id} - Product Update!` }) })
        .catch((e) => res.send(e))
})

// delete product
router.delete('/product/:id', auth, (req, res) => {
    client.query(`
        DELETE FROM products
        WHERE id='${req.params.id}'`)
        .then((result) => {
            if (!result.rowCount) { throw { error: 'product not found' } }
            res.send({ success: `ID:${req.params.id} - Product Deleted!` }) })
        .catch((e) => res.send(e))
})

module.exports = router