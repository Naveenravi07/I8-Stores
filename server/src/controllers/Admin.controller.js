const { Router} = require('express');
const { productModel } = require('../database/schema');
const { admins } = require('../config.json');


const AdminRouter = Router();

AdminRouter.post('/product/create', async (req, res) => {
    console.log("adminrouter !")
    try {
        let { prodName, prodbrand, prodprice, prodctg, proddesc, prodimg } = req.body
        if (admins.includes(req.headers.data.id)) {
            let product = await new productModel({ prodName, prodbrand, prodprice, prodctg, proddesc, prodimg }).save()
            return res.status(200).json({ data: product })
        } else {
            return res.status(401).json({ msg: "You don't have enough permission" })
        }
    } catch (err) { console.log(err); }
});

AdminRouter.get('/product/all', async (req, res) => {
    try {
        const product = await productModel.find()
        return res.json({data:product});
    } catch (err) { console.log(err); }
});

AdminRouter.get('/product/get', async (req, res) => {
    try {
        const product = await productModel.findById(req.query.id);
        return res.json({data:product});
    } catch (err) { console.log(err); }
}); 

module.exports = { AdminRouter }
