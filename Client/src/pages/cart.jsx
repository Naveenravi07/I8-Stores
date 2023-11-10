import axios from 'axios'
import CartPage from '../components/cartpage.jsx'
import instance from '@/Helpers/Config/axios.config.js'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

export default function Cart(){
    let [cartData,setCartData] = useState(null)

    let fetch_user_cart = async() =>{
        await instance.get('/user/cart')
        .then((response)=>setCartData(response.data.data))
        .catch((err)=>toast.error("Error occured"))
    }
    
     useEffect(()=>{
         fetch_user_cart()
     },[])

    return(
        <CartPage cartData={cartData} />
    )
}
