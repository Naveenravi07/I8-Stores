import instance from "@/Helpers/Config/axios.config"
import Card from "@/components/card"
import { toast } from "react-toastify"
import {useState,useEffect} from 'react'

export default function all(){
    let [products,setProducts] = useState([])
    
    const fetch_all_products = async() =>{
        await instance.get('/admin/product/all')
        .then((response)=>setProducts(response.data.data))
        .catch((err)=>toast("Error Occcured"))
    }

    useEffect(()=>{
        fetch_all_products()
    },[])


    return( 
        <div style={{display:'flex',flexDirection:"row",flexWrap:"wrap",gap:'3rem',justifyContent:'center'}}>
        {
            products &&  products.map((item)=>
                    <Card prodPrice={item.prodprice} prodName={item.prodName} prodDesc={item.proddesc}  />
            )
                
        } 
        </div>
    )
}

