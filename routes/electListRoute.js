const express = require('express')
const router = express.Router()
const electListing = require('../models/electrongListModel')

router.get('/',async (req, res) => {
    const allList = await electListing.find({})
    try{
        res.status(200).json(allList)
    } catch (err){
        res.status(500).send({mss: 'nothing found'})
    }
})

//create one 
router.post('/', async (req,res)=> {
    const {title,
        price, 
        brand,        
        location:{
            province, 
            city
    }} = req.body
    
    try {
        
        const newPost = await electListing.create({
            title,price, brand,
            location:{
                province, 
                city
            }
        })
        res.status(200).send(newPost)
    } catch  (e) {
        res.status(400).json({error: e.message})
    }    
})

module.exports = router