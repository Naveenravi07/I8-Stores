const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    pwd:{type:String,required:true},
})

let userModel = mongoose.model('users',userSchema)

module.exports = {userModel}
