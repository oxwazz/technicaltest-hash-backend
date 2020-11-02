const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '2588',
    database: 'hash1'
})

client.connect()

module.exports = client