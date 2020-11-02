const express = require('express')
const routerUser = require('./routes/routeUser')
const routerProduct = require('./routes/routeProduct')
const routerOrder = require('./routes/routeOrder')

const port = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routerUser)
app.use(routerProduct)
app.use(routerOrder)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})