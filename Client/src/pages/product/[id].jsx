import instance from "@/Helpers/Config/axios.config"
import { toast } from "react-toastify"
import { useState, useEffect } from "react"
import { useRouter } from "next/router";


export default function ProductPage() {
    let router = useRouter();
    let [product, setproduct] = useState()
    const fetch_products_details = async (id) => {
        console.log(id)
        await instance.get('/user/product/get', { params: { id } })
            .then((response) => setproduct(response.data.data))
            .catch((err) => toast("Error Occcured"))
    }

    useEffect(() => {
        if (router.query.id) {
            fetch_products_details(router.query.id)
        }

    }, [router.query])

    return (
        <>
            <div className="app">
                {
                    product &&
                    <div className="details" >
                        <div className="big-img">
                            <img src={product.prodimg} alt="" />
                        </div>
                        <div className="box">
                            <div className="row">
                                <h2>{product.prodName}</h2>
                                <span>${product.prodprice}</span>
                            </div>

                            <p>{product.proddesc}</p>
                            <p>{product.prodqunt}</p>
                            <button className="cart">Add to cart</button>

                        </div>
                    </div>

                }
            </div>
        </>
    )

}
