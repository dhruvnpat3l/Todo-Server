const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 //user Schema fields

 username:{
    type:String,
    required:true,
    unique:true,
 },
 password:{
    type: String,
    required: true,
 },
 createdAt:{
    type:Date,
    default:Date.now,
 },
})

module.exports = mongoose.model('User', userSchema)

