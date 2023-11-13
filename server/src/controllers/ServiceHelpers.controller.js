const { Router } = require("express");
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()


const ServiceHelpersRouter = Router();
AWS.config.update({ region: 'us-west-1' });

const S3 = new AWS.S3({
    region: "us-west-1",
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.ACCESSKEYSECRECT,
    signatureVersion: 'v4'
})


ServiceHelpersRouter.post('/aws/generate_s3_presignedurl',(req,res)=>{
    try{
        let {body} = req
        let fileName = uuidv4()
        var s3Params = {
            Bucket: body.bucketName,
            Key: fileName, 
            ContentType: body.contentType,
            ACL: body.isPublic ? 'public-read' : null,
            Expires: 1200,// 20 minutes:w
        };
        let signedUrl = S3.getSignedUrl('putObject', s3Params)
        res.status(200).json({data:{url:signedUrl,key:fileName}})
    }catch(err){
        console.log(err)
    }
})

module.exports={ServiceHelpersRouter}
