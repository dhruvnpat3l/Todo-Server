const express = require('express')
const bodyparser = require('body-parser')
const connectDB = require('./db/connection');

const app = express()

connectDB();

const port = 3000


app.get('/',(req,res)=>{
    res.send("successfully connect to AWS")
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})