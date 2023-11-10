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
    
    useEffect(() => {
        if(!user || user.token == null || user.loggedIn == false ){
            toast.dark("You must login")
            router.push('/auth/login')
        }else{
            fetch_user_cart()
        }
    }, [user])

    return(
        <CartPage cartData={cartData} />
    )
}
