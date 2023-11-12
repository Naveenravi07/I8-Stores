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
        .catch(()=>toast.error("Error occured"))
    }
    
    let change_prod_quantity = async(proId,count)=>{
       await instance.patch("/user/cart/incordecincart",{count,productid:proId})
        .then((response)=>{
            let updatedProducts = cartData.products.map((obj)=>{
               if( obj.item !== response.data.data._id ) return obj 
                else{
                    if(response.data.data.quntity>0){
                        return {...obj,quntity:response.data.data.quntity}
                    }else{
                        return null
                    }
                }})
             updatedProducts = updatedProducts.filter((obj)=>obj !== null)
            let total = cartData.products.reduce((acc,val)=>{
                if(val.item==proId){
                  acc = acc+(count*val.productdetails.prodprice)
                }
                return acc
            },cartData.totalPriceInCart)

            setCartData({products:updatedProducts,totalPriceInCart:total})
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
