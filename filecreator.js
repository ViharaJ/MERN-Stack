require('dotenv').config()
const mongoose = require('mongoose');

// make a connection 
mongoose.connect(process.env.MONGO_URI);
 
// get reference to database
let db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");    
});

let cities = ['a','b','c','d','e'];
    let j = 0;
    const listSchema = new mongoose.Schema({
        title: String, 
        location: {
            province:String, 
            city:String
        }
    })

    const listing = mongoose.model('listing', listSchema)

    for (let i = 0; i < 10000; i++) {
        let number = String(i)
        const list = new listing({
            title: `${number}-dud-file`,
            location:{
                province: "cal",
                city: `${cities[j]}`
            }
        })

        
        // save model to database
        list.save();       
             

        if(i%2000==0 & i != 0) {
            console.log(`INCREMENTED AT ${i}`)
            j++
        }
    }
 
