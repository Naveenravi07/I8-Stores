import DeleteIcon from '@mui/icons-material/Delete'

export default function CartPage({ cartData, changeQunty, remove_product }) {

    return (
        <section>
            <div class="ProductDetails" style={{ width: '70.5rem' }}>

                <table style={{ width: '70rem', marginRight: '20rem' }}>

                    <tr>
                        <th>Items</th>
                        <th></th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                    {
                        cartData &&
                        cartData.products.map(({ productdetails, quntity }) => {
                            return (
                                <>
                                    <tr key={productdetails._id} style={{ height: '6rem' }}>
                                        <td><img style={{ marginTop: '0.2rem' }} src="https://imgur.com/3Y1DLYC.png"
                                            alt="" /></td>
                                        <td>{productdetails.prodName}</td>
                                        <td>
                                            <div class="pcount">
                                                <div><button onClick={() => changeQunty(productdetails._id, 1)} style={{ backgroundColor: 'rgb(25,118,210)', padding: '0.3rem', width: '1.7rem', height: '1.5rem', display: 'flex', alignItems: 'center ', justifyContent: 'center', borderRadius: '0.rem' }} >+</button></div>
                                                <div><span style={{ fontWeight: 500, color: 'black', padding: '0.8rem', paddingTop: '0.4rem', paddingBottom: '0.4rem', fontFamily: 'Poppins' }}>{quntity}</span></div>
                                                <div><button onClick={() => changeQunty(productdetails._id, -1)} style={{ backgroundColor: 'rgb(25,118,210)', padding: '0.3rem', width: '1.7rem', height: '1.5rem', display: 'flex', alignItems: 'center ', justifyContent: 'center', borderRadius: '0.rem' }}>-</button></div>
                                            </div>
                                        </td>
                                        <td><button style={{ border: 'none', outline: 'none', }} onClick={() => remove_product(productdetails._id)}><DeleteIcon style={{ transform: 'scale(2.3)', fontSize: '12px', color: 'rgb(228, 79, 79)' }} /></button></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </table>
            </div>
            <div class="CardAndCheckout">
                <p>ORDER SUMMARY</p>
                <p>ITEMS: <span>{cartData && cartData.products.length}</span></p>
                <p>PROMO CODE:</p>
                <input type="text" placeholder="AAA-BBB-YYY-CCC" />
                <div class="checkbtn">

                    <button class="apply">APPLY</button>
                </div>
                {
                    cartData &&
                    <div class="subtotal">
                        <div>TOTAL COST :</div> <span>$ {cartData.totalPriceInCart}</span>
                    </div>
                }
                <div><button class="checkout">PAY NOW</button></div>

            </div>
        </section >

    )
}
