const express = require('express')
const router = express.Router()
const listing = require('../models/listingModel')
const {getLisitings, 
    createListing} = require('../controllers/ListControl')
    
//Get all listings
router.get('/', getLisitings)


//Get one listing
router.get('/:id', (req,res)=> {
    res.send(req.params.id)
})

//create one 
router.post('/',createListing)

module.exports = router