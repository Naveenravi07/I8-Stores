const { Router } = require('express');
const { productModel, cartModel } = require('../database/schema');
var ObjectId = require("mongodb").ObjectId;
const Razorpay = require("razorpay");

let userrouter = Router()

userrouter.get('/product/all', async (req, res) => {
    try {
        const product = await productModel.find()
        const totalproductsincart = await cartModel.findOne({ userid:req.headers.data.id});
        let total = 0;


        if (totalproductsincart != null) {
            let productarr = totalproductsincart.products;
            for (let i = 0; i < productarr.length; i++) {
                var orgintotal = productarr[i].quntity;
                total = total + orgintotal;
            }
        }

        return res.json({ data: product, cartcount: total });
    } catch (err) { console.log(err); }


});

userrouter.get('/product/get', async (req, res) => {
    try {
        const product = await productModel.findOne({ _id: new ObjectId(req.query.id) });
        return res.json({ data: product });
    } catch (err) { console.log(err); }
});


userrouter.post("/addtocart",async(req,res)=>{
    if(!req.headers.data) return
    let findcart=await cartModel.findOne({userid:req.headers.data.id})
    let productdata = await productModel.findOne({_id:new ObjectId(req.body.productid)})

    const product = {
        prodId: new ObjectId(req.body.productid),
        quntity: 1
    }

    if(findcart==null ||findcart.products==null || findcart.products==undefined){
        let price = productdata.prodprice
        const cart=await new cartModel({userid:req.headers.data.id,products:[product],totalPrice:price}).save();
        res.status(200).send({data:cart})
    }else{
        let convert=new ObjectId(req.body.productid)
        let sameelem = findcart.products.findIndex(product=>product.prodId.toString() === convert.toString())
        let price = findcart.totalPrice+productdata.prodprice

        if(sameelem !=-1){
            let cart = await cartModel.findOneAndUpdate({userid:req.headers.data.id,'products.prodId':convert},
            {
                $inc:{'products.$.quntity':1},
                $set:{totalPrice:price}
            },
            {new:true})
            res.status(200).send({data:cart})
        }else{
            let cart = await cartModel.findOneAndUpdate({userid:req.headers.data.id},{
                $push:{products:product},$set:{totalPrice:price}},{new:true})
            res.status(200).send({data:cart})
        }
    }
})


userrouter.get("/cart",async(req,res)=>{
    let cartcoll=await cartModel.aggregate([
        {
            $match:{userid:req.headers.data.id}
        },


        {
            $unwind: "$products"
        },
        {
            $project:{
                item:"$products.prodId",
                quntity:"$products.quntity",
                totalPrice:"$totalPrice"
                quntity:"$products.quntity",
                totalPrice:"$totalPrice"
            }
        },
        {
            $lookup:{
                from:"products",
                localField:"item",
                foreignField:"_id",
                as:"newcollection"
            }

        },
        {
            $project:{
                item:1,
                quntity:1,
                totalPrice:1,
                totalPrice:1,
                productdetails: { $arrayElemAt: [ "$newcollection", 0 ] },
            }
        },
        {
            $group:{
                _id:null,
                products: {
                    $push: {
                        item: "$item",
                        quntity: "$quntity",
                        productdetails: "$productdetails",
                    }
                },
                totalPrice:{$first:"$totalPrice"}
            $group:{
                _id:null,
                products: {
                    $push: {
                        item: "$item",
                        quntity: "$quntity",
                        productdetails: "$productdetails",
                    }
                },
                totalPrice:{$first:"$totalPrice"}
            }
        },


    ]).exec()
    let products = cartcoll[0].products
    return res.status(200).json({data:{products}})
    let products = cartcoll[0].products
    return res.status(200).json({data:{products}})
})

userrouter.patch("/cart/incordecincart",async(req,res)=>{
    let count=parseInt(req.body.count);
    let prod_doc = await productModel.findOne({_id:new ObjectId(req.body.productid)})
    let user_cart = await cartModel.findOne({userid:req.headers.data.id})

    let item = user_cart.products.find((obj)=>obj.prodId.toString() === prod_doc._id.toString() )
    if(item.quntity==1 && count==-1){
        let price = user_cart.totalPrice - prod_doc.prodprice
        await cartModel.findOneAndUpdate({userid:req.headers.data.id},{
            $pull:{products:{prodId:new ObjectId(req.body.productid)}},$set:{totalPrice:price}},{new:true})
        res.status(200).json({data:{_id:prod_doc._id,quntity:0}})
    }else{
        let price = user_cart.totalPrice+(prod_doc.prodprice*count)
        await  cartModel.findOneAndUpdate({userid:req.headers.data.id,"products.prodId":new ObjectId(req.body.productid)},{
            $inc:{"products.$.quntity":count},$set:{totalPrice:price}},{new:true})
        res.status(200).json({data:{_id:req.body.productid,quntity:item.quntity+count,}})
    }
})

userrouter.patch("/cart/remove",async(req,res)=>{
    let prod_doc = await productModel.findOne({_id:new ObjectId(req.body.productid)})
    let cart_doc = await cartModel.findOne({userid:req.headers.data.id})
    let selected_item = cart_doc.products.find((obj)=>obj.prodId.toString()===prod_doc._id.toString())
    let price = cart_doc.totalPrice-(selected_item.quntity*prod_doc.prodprice)
    await cartModel.findOneAndUpdate({userid:req.headers.data.id},{
       $pull:{products:{prodId:new ObjectId(req.body.productid)}},$set:{totalPrice:price }
   })
    res.status(200).json({data:{_id:req.body.productid}})
})


userrouter.get("/cart/checkout", async (req, res) => {
    let userID = req.headers.data.id;
    let totalamount = 300;
    var instance = new Razorpay({ key_id: 'rzp_test_bQuC3tCBEV6iGn', key_secret: 'WTS4y1ORhsbXGOS4eMzbPFir' })
    
    instance.orders.create({
        amount: totalamount * 100,
        currency: "INR",
        receipt: userID,
        notes: {
            key1: "value3",
            key2: "value2"
        
        }
    }, function (err, order) {
        console.log(order)
        res.json({data:order})
    });
});



module.exports = { userrouter }
