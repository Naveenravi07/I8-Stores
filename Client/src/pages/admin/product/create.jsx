import instance from '@/Helpers/Config/axios.config';
import {Progress} from '@mantine/core';
import axios from 'axios';
import {  useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from "react-toastify";


export default function Create() {

    let router = useRouter()

    const [prodName, setprodName] = useState();
    const [prodbrand, setprodBrand] = useState();
    const [prodprice, setprodPrice] = useState();
    const [prodctg, setprodctg] = useState();
    const [proddesc, setproddesc] = useState();
    const [prodqunt, setprodqunt] = useState();
    const [progress,setProgress] = useState(0);
    const [prodImgKey,setProdImageKey] = useState(null)

    const handleSubmit = async (e) => {
        if(progress !== 100) return toast.dark("Please wait for the image to upload")
        e.preventDefault();
        await instance.post('/admin/product/create', { prodName, prodbrand, prodprice, prodctg, proddesc,prodqunt,prodimg:prodImgKey })
            .then((response) => {
                if (response.status === 200) {
                    toast("Succsefully Saved")
                    router.push('/')
                }
            })
            .catch((err) => {
                toast.dark(err.response.data?.msg)
            })
    };


    const handleThumbnailUpload = async(e)=>{ 
        let file = e.target.files[0] 
        let body = {fileName:`${file.name}`,contentType:file.type,isPublic:true,bucketName:'i8storesproducts'}
        const preSignedUrl = await instance.post("/servicehelpers/aws/generate_s3_presignedurl",body) 
        await axios.put(preSignedUrl.data.data.url,file,{
            headers: {
                "Content-Type": body.fileType,
            },
            onUploadProgress: (e) => {
                const percentCompleted = Math.round((e.loaded * 100) / e.total);
                setProgress(percentCompleted)
            },
        })
            .then(()=>{
                setProdImageKey(preSignedUrl.data.data.key)
            })
            .catch(()=>{
                toast.error("Error Occured")
            })
    }

    return (
        <>
            <section class="container" style={{ marginTop: '10rem' }}>

                <header>Add to product</header>
                <form action="#" class="form" method="post">
                    <div class="input-box">
                        <label>Product Name </label>
                        <input type="text" placeholder="Enter Product Name" required onChange={(e) => setprodName(e.target.value)} />
                    </div>

                    <div class="input-box">
                        <label>Product Brand</label>
                        <input type="text" placeholder="Enter Product Brand" required onChange={(e) => setprodBrand(e.target.value)} />
                    </div>

                    <div class="input-box">
                        <label>Product Price</label>
                        <input type="text" placeholder="Enter Product price" required onChange={(e) => setprodPrice(e.target.value)} />
                    </div>
                    <br />
                    <label>Product catogory</label>
                    <div class="select-box">

                        <select name="catogory" onChange={(e) => setprodctg(e.target.value)} >
                            <option hidden>catogory</option>
                            <option value="computer" >Desktop</option>
                            <option value="Laptop">Laptop</option>
                        </select>
                    </div>

                    <div class="input-box">
                        <label>Product discription</label>
                        <input type="text" placeholder="Enter Product discription" required onChange={(e) => setproddesc(e.target.value)} />
                    </div>


                    <div class="input-box">
                        <label>Product Image</label>
                        <input type="file" onChange={(e)=>handleThumbnailUpload(e)} required  />
                        <Progress value={progress} />
                    </div>

                    <div class="input-box">
                        <label>Product Quntity</label>
                        <input type="number" placeholder="Enter Quntity" required onChange={(e) => setprodqunt(e.target.value)} />
                    </div>

                    <button onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
            </section>
        </>
    )
}

