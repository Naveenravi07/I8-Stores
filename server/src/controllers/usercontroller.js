const { Router} = require('express');
const { productModel, cartModel } = require('../database/schema');
var ObjectId = require("mongodb").ObjectId;

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

    const product={
        prodId:new ObjectId(req.body.productid),
        quntity:1
    }

    if(findcart==null ||findcart.products==null || findcart.products==undefined){

        const cart=await new cartModel({userid:req.headers.data.id,products:[product]}).save();
        res.status(200).send({data:cart})
    }else{
        let convert=new ObjectId(req.body.productid)
        let sameelem = findcart.products.findIndex(product=>product.prodId.toString() === convert.toString())

        if(sameelem !=-1){
            let cart = await cartModel.findOneAndUpdate({userid:req.headers.data.id,'products.prodId':convert},{
                $inc:{'products.$.quntity':1}},{new:true})
            res.status(200).send({data:cart})
        }else{
            let cart = await cartModel.findOneAndUpdate({userid:req.headers.data.id},{
                $push:{products:product}})
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
                productdetails: { $arrayElemAt: [ "$newcollection", 0 ] },
            }
        },
        {
            $project:{
                item:1,
                quntity:1,
                productdetails: 1,
                total:{$sum:{$multiply:["$quntity","$productdetails.prodprice"]}}
            }
        },
    ]).exec()
    let totalPrice = cartcoll.reduce((previous, current) => previous+current.total,0)
    return res.status(200).json({data:{products:cartcoll,totalPriceInCart:totalPrice}})
})


userrouter.patch("/cart/incordecincart",async(req,res)=>{
    let count=parseInt(req.body.count);
    let prod_doc = await productModel.findOne({_id:new ObjectId(req.body.productid)})
    let user_cart = await cartModel.findOne({userid:req.headers.data.id})

    let item = user_cart.products.find((obj)=>obj.prodId.toString() === prod_doc._id.toString() )
    if(item.quntity==1 && count==-1){
        await cartModel.findOneAndUpdate({userid:req.headers.data.id},{
            $pull:{products:{prodId:new ObjectId(req.body.productid)}}},{new:true})
        res.status(200).json({data:{_id:prod_doc._id,quntity:0}})
    }else{
        await  cartModel.findOneAndUpdate({userid:req.headers.data.id,"products.prodId":new ObjectId(req.body.productid)},{
            $inc:{"products.$.quntity":count}},{new:true})
        res.status(200).json({data:{_id:req.body.productid,quntity:item.quntity+count,}})
    }
})

//ok
userrouter.patch("/cart/remove",async(req,res)=>{
    console.log(req.body.productid)
    console.log(req.headers.data.id)
    await cartModel.findOneAndUpdate({userid:req.headers.data.id},{
       $pull:{products:{prodId:new ObjectId(req.body.productid)}}
   })
})




module.exports = { userrouter }
