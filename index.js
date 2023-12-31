const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

// All connection and database file 
const connectDB = require('./db/connection');
const  User = require('./db/models/user.js');

const app = express()
const port = 3000

//// Enable CORS and JSON parsing
app.use(cors())
app.use(bodyparser.json())

// Database Connection
connectDB();



app.get('/',(req,res)=>{
    res.send("successfully connect to AWS")
})

// // Define route for handling user signups 
app.post('/signup',async(req,res)=>{
    try{
        const {username,password} = req.body;

        const user = new User({
            username,
            password,
            
        });
        await user.save();
        res.status(201).json({message:'user registered successfully'});
    }
    catch (error){
        console.error('Error while signing up',error)
        res.status(500).json({message:'Internal server Error'});
    }
});

// listen port
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})