const { Router, request } = require('express');
const { userModel } = require('../database/schema');
const { admins } = require('../config.json');

const AdminRouter = Router();

AdminRouter.post('/product/create', async (req, res) => {
    console.log("adminrouter !")
    try {
        let { prodName, prodbrand, prodprice, prodctg, proddesc, prodimg } = req.body
        if (admins.includes(request.headers.data.id)) {
            let user = await new userModel({ prodName, prodbrand, prodprice, prodctg, proddesc, prodimg }).save()
        } else {
            console.log("Not enough permission to perform this");
        }

    } catch (err) {

    }


});

module.exports = { AdminRouter }
