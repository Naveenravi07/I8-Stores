const { Router} = require('express');
const { productModel, cartModel, userModel } = require('../database/schema');
const { default: mongoose } = require('mongoose');
var ObjectId = require("mongodb").ObjectId;

let userrouter = Router()

userrouter.get('/product/all', async (req, res) => {
    console.log("/product/all called !");
    try {
        const product = await productModel.find()
        const totalproductsincart = await cartModel.findOne({ userid: "400" });
        console.log(totalproductsincart)
    let total=0;
   
    if(totalproductsincart!=null){
        let productarr=totalproductsincart.products;
        for(let i=0;i<productarr.length;i++){
            var orgintotal=productarr[i].quntity;
            total=total+orgintotal;
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

    const product={
        prodId:new ObjectId(req.body.productid),
        quntity:1
    }
    
    if(findcart==null ||findcart.products==null || findcart.products==undefined){
      
        const cart=await new cartModel({userid:req.body.userid,products:[product]}).save();
        console.log(cart)
    }else{
        let convert=new ObjectId(req.body.productid)
        console.log(convert)
        console.log(findcart.products)
        let sameelem=findcart.products.findIndex(product=>product.prodId.toString() === convert.toString())
        console.log(sameelem)
       
        if(sameelem !=-1){

            await cartModel.updateOne({'products.prodId':convert},{
                $inc:{'products.$.quntity':1}})
        }else{
            await cartModel.updateOne({userid:req.body.userid},{
            $push:{"products":product}

            })
        }
    }
})


  userrouter.get("/cart",async(req,res)=>{
    let cartcoll=await cartModel.aggregate([
        {
            $match:{userid:"200"}
        },
        {
            $unwind: "$products"
        },
        {
            $project:{
                item:"$products.prodId",
                quntity:"$products.quntity"
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
                productdetails: { $arrayElemAt: [ "$newcollection", 0 ] }
            }
        }

    ]).exec()
     console.log(cartcoll)
  })


userrouter.get("/usercart",(req,res)=>{
   async function  totalprice(){
        let totalproductprice=await cartModel.aggregate([
        {
            $match:{userid:"200"}
        },
        {
            $unwind: "$products"
        },
        {
            $project:{
                item:"$products.prodId",
                quntity:"$products.quntity"
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
                productdetails: { $arrayElemAt: [ "$newcollection", 0 ] }
            }
        },
        {
            $group:{
                _id:null,
               total:{$sum:{$multiply:["$quntity","$productdetails.prodprice"]}}
            }
        }

    ]).exec()
     console.log(totalproductprice)
    }
    
    
})






module.exports = { userrouter }