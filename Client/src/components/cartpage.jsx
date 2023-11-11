import DeleteIcon from '@mui/icons-material/Delete'

export default function CartPage({cartData,changeQunty}){
    
    return(
        <section>
        <div class="ProductDetails">

        <table>

        <tr>
        <th>Items</th>
        <th></th>
        <th>Quantity</th>
        <th>Remove</th>
        </tr>
        {
            cartData &&
            cartData.products.map(({productdetails,quntity})=>{
                return(
                    <>
                    <tr key={productdetails._id}>
                    <td><img src="https://imgur.com/3Y1DLYC.png"
                    alt="" /></td>
                    <td>{productdetails.prodName}</td>
                    <td>
                    <div class="pcount">
                    <div><button onClick={()=>changeQunty(productdetails._id,quntity,1)}>+</button></div>
                    <div><span style={{ fontWeight: 500,color:'black',padding:'6px',fontFamily:'Poppins'}}>{quntity}</span></div>
                    <div><button onClick={()=>changeQunty(productdetails._id,quntity,-1)}>-</button></div>
                    </div>
                    </td>
                    <td><button><DeleteIcon style={{transform:'scale(1.8)',fontSize:'12px'}}/></button></td>
                    </tr>
                    </>
                )
            })
        }
        </table>
        </div>
        <div class="CardAndCheckout">
        <p>ORDER SUMMARY</p>
        <p>ITEMS: <span>3</span></p>
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
        <div><button class="checkout">CHECKOUT</button></div>

        </div>
        </section>

    )
}
