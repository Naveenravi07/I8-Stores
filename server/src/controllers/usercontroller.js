const { Router } = require('express');
const { productModel, cartModel } = require('../database/schema');
const mongoose = require("mongoose")
const { Types: { ObjectId: ObjectId }, } = require("mongoose");

let userrouter = Router()

userrouter.get('/product/all', async (req, res) => {
    console.log("/product/all called !");
    try {
        const product = await productModel.find()
        const totalproductsincart = await cartModel.findOne({ userid: "400" });
        console.log(totalproductsincart)
        let total = 0;

        if (totalproductsincart != null) {
            let productarr = totalproductsincart.products;
            for (let i = 0; i < productarr.length; i++) {
                var orgintotal = productarr[i].quntity;
                total = total + orgintotal;
            }
            console.log(total);
        }

        return res.json({ data: product, cartcount: total });
    } catch (err) { console.log(err); }


});

userrouter.get('/product/get', async (req, res) => {
    console.log(req.query.id);
    try {
        const product = await productModel.findOne({ _id: new ObjectId(req.query.id) });
        return res.json({ data: product });
    } catch (err) { console.log(err); }
});




userrouter.post("/addtocart", async (req, res) => {
    let findcart = await cartModel.findOne({ userid: req.body.userid })

    const product = {
        prodId: req.body.productid,
        quntity: 1
    }
    if (findcart == null || findcart.products == null || findcart.products == undefined) {

        const cart = await new cartModel({ userid: req.body.userid, products: [product] }).save();
    } else {
        let sameelem = findcart.products.findIndex(product => product.prodId == req.body.productid)
        console.log(sameelem)

        if (sameelem != -1) {
            await cartModel.updateOne({ 'products.prodId': req.body.productid }, {
                $inc: { 'products.$.quntity': 1 }
            })
        } else {
            await cartModel.updateOne({ userid: req.body.userid }, {
                $push: { "products": product }

            })
        }
    }
})



module.exports = { userrouter }