require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
 

const app = express()
const listingRoutes = require('./routes/listings')
const elecListRoutes = require('./routes/electListRoute')

// middleware
app.use(express.json())

//routes
app.use('/api/listings', listingRoutes)
app.use('/EEE/listings', elecListRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('listening')
    })
})
.catch((error)=>{
    console.log(error)
})

