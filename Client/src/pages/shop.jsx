import instance from "@/Helpers/Config/axios.config"
import Card from "@/components/card"
import { toast } from "react-toastify"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";

import { userAgent } from "next/server"

export default function all() {
    let router = useRouter();
    let [products, setProducts] = useState([])

    const fetch_all_products = async () => {
        await instance.get('/user/product/all')
            .then((response) => setProducts(response.data.data))
            .catch((err) => toast("Error Occcured"))
    }

    useEffect(() => {
        fetch_all_products()
    }, [])




    return (
        <div style={{ display: 'flex', flexDirection: "row", flexWrap: "wrap", gap: '3rem', justifyContent: 'center', marginTop: '30rem' }}>
            {
                products && products.map((item) =>
                    <div onClick={() => router.push(`/product/${item._id}`)}>
                        <Card prodPrice={item.prodprice} prodName={item.prodName} prodDesc={item.proddesc} />
                    </div>
                )

            }
        </div>
    )
}

