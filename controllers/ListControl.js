const mongoose = require('mongoose')
const listing = require('../models/listingModel')

// get all listings 

const getAllListings = async (req, res) => {
    const allList = await listing.find({})
    try{
        res.status(200).json(allList)
    } catch (err){
        res.status(500).send({mss: 'nothing found'})
    }
}

// create a new listing 
const createListing = async(req, res) => {
    const {title, location:{
        province, 
        city
    }} = req.body

    try {
        const newPost = await listing.create({
            title, location:{
                province, 
                city
            }
        })
        res.status(200).send(newPost)
    } catch  (e) {
        res.status(400).json({error: e.message})
    }    
}

module.exports = {getAllListings, 
    createListing}