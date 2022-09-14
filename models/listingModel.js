const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listingSchema = new Schema({
    title: {
        type: String, 
        required: true 
    },
    location: {
        province: {
            type: String, 
            required: true,
            index:true
        },
        city:  {
            type: String, 
            required: true,
            index: true
        }
    }
})

module.exports = mongoose.model('Listing', listingSchema)