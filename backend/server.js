require('dotenv').config() //environment variable
const express = require('express')
const itemRoutes = require('./routes/items')

// function to create Express app
const app = express()

//Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routehandler, using the router from ./routes/item.js
app.use('/api/items', itemRoutes)

// listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port!', process.env.PORT)
})

