const { Router, request } = require('express');
const { productModel } = require('../database/schema');
const { admins } = require('../config.json');


const AdminRouter = Router();

AdminRouter.post('/product/create', async (req, res) => {
    console.log("adminrouter !")
    try {
        let { prodName, prodbrand, prodprice, prodctg, proddesc, prodimg } = req.body
        if (admins.includes(request.headers.data.id)) {
            let product = await new productModel({ prodName, prodbrand, prodprice, prodctg, proddesc, prodimg }).save()
            return res.json({ data: product })
        } else {
            return res.json({ msg: "You don't have enough permission" })
        }
    } catch (err) { console.log(err); }
});

AdminRouter.get('/prduct/all', async (req, res) => {
    try {
        const products = await productModel.find()
        return products;
    } catch (err) { console.log(err); }
});

module.exports = { AdminRouter }
