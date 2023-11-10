import instance from "@/Helpers/Config/axios.config"
import Card from "@/components/card"
import { toast } from "react-toastify"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";


export default function all() {
    let router = useRouter();
    let [products, setProducts] = useState([])

    const fetch_all_products = async () => {
        await instance.get('/user/product/all')
            .then((response) => setProducts(response.data.data))
            .catch((err) => toast("Error Occcured"))
    }

    const add_to_cart = async(product) => {
        await instance.post('/user/addtocart',{productid:product})
            .then((response)=>toast.dark("Added to cart"))
            .catch((err)=>toast.error("error occured"))
    }

    useEffect(() => {
        fetch_all_products()
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: "row", flexWrap: "wrap", gap: '3rem', justifyContent: 'center', marginTop: '30rem' }}>
            {
                products && products.map((item) =>
                        <Card  prodPrice={item.prodprice} proId={item._id} prodName={item.prodName} prodDesc={item.proddesc} addtoCart={(id)=>add_to_cart(id)} />
                )

            }
        </div>
    )
}

