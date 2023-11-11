import CartPage from '../components/cartpage.jsx'
import instance from '@/Helpers/Config/axios.config.js'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router.js'

export default function Cart(){
    let router = useRouter()
    let [cartData,setCartData] = useState(null)
    let user = useSelector((state)=>state.auth)

    let fetch_user_cart = async() =>{
        await instance.get('/user/cart')
        .then((response)=>setCartData(response.data.data))
        .catch((err)=>toast.error("Error occured"))
    }
    
    let change_prod_quantity = async(proId,quntiy,count)=>{
       await instance.patch("/user/cart/incordecincart",{count,quntity:quntiy,productid:proId})
        .then((response)=>{
            let updatedProducts = cartData.products.map((obj,index)=>obj.item !== response.data.data._id ? obj : {...obj,quntity:response.data.data.quntity})
            let total = cartData.products.reduce((acc,val)=>{
                if(val.item==proId){
                    console.log(proId)
                    console.log(val)
                  acc = acc+(count*val.productdetails.prodprice)
                }
                return acc
            },cartData.totalPriceInCart)

            setCartData({products:updatedProducts,totalPriceInCart:total})
            toast.dark("Added to cart")
        })
        .catch((err)=>{
            console.log(err)
            toast.error("Error occured")
        })
    }

    useEffect(() => {
        if(!user || user.token == null || user.loggedIn == false ){
            toast.dark("You must login")
            router.push('/auth/login')
        }else{
            fetch_user_cart()
        }
    }, [user,])

    return(
        <CartPage cartData={cartData} changeQunty={change_prod_quantity} />
    )
}
