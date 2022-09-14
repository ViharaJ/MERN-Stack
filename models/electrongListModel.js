const mongoose = require('mongoose')

const Schema = mongoose.Schema

const elecListSchema = new Schema({
    title: String, 
    price: String, 
    brand: {type: String, index: true},     
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

module.exports = mongoose.model('electListing', elecListSchema)