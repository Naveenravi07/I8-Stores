const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    pwd: { type: String, required: true },
})

const productSchema = new mongoose.Schema({
    prodName: { type: String, required: true },
    prodbrand: { type: String, required: true },
    prodprice: { type: Number, required: true },
    prodctg: { type: String, required: true },
    proddesc: { type: String, required: true },
    prodimg: { type: String, required: false },
    prodqunt: { type: Number, required: false },
})

const usercartscema = new mongoose.Schema({
    userid: { type: String, require: true },
    products: { type: Array, default: [] }
})


let userModel = mongoose.model('users', userSchema)
let productModel = mongoose.model('product', productSchema)
let cartModel = mongoose.model('cart', usercartscema)

module.exports = { userModel, productModel, cartModel }
