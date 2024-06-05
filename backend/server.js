require('dotenv').config() //environment variable
const express = require('express')
const mongoose = require('mongoose')
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

//Connect to db async proc, return promies
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request, after connected to db
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



