import React from 'react';

const ShoppingCart = () => {
    return (
        <div>
            <nav>
                {/* Nav bar */}
            </nav>
            <section>
                <div class="ProductDetails">

                    <table>
                        <tbody>
                            <tr>
                                <th>Items</th>
                                <th></th>
                                <th>Quantity</th>
                                <th>Remove</th>
                            </tr>
                        </tbody>

                        <tr>
                            <td><img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/AVANT-P870DMG-GAMING-LAPTOP.png"
                                alt="" /></td>
                            <td>OMEN-P870DMG</td>
                            <td>
                                <div class="pcount">
                                    <div><button>+</button></div>
                                    <div><span>5</span></div>
                                    <div><button>-</button></div>
                                </div>
                            </td>
                            <td><button>i</button></td>
                        </tr>

                        <tr>
                            <td><img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/AVANT-P870DMG-GAMING-LAPTOP.png"
                                alt="" /></td>
                            <td>OMEN-P870DMG</td>
                            <td>
                                <div class="pcount">
                                    <div><button>+</button></div>
                                    <div><span>5</span></div>
                                    <div><button>-</button></div>
                                </div>
                            </td>
                            <td><button>i</button></td>
                        </tr>


                        <tr>
                            <td><img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/AVANT-P870DMG-GAMING-LAPTOP.png"
                                alt="" /></td>
                            <td>OMEN-P870DMG</td>
                            <td>
                                <div class="pcount">
                                    <div><button>+</button></div>
                                    <div><span>5</span></div>
                                    <div><button>-</button></div>
                                </div>
                            </td>
                            <td><button>i</button></td>
                        </tr>


                        <tr>
                            <td><img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/AVANT-P870DMG-GAMING-LAPTOP.png"
                                alt="" /></td>
                            <td>OMEN-P870DMG</td>
                            <td>
                                <div class="pcount">
                                    <div><button>+</button></div>
                                    <div><span>5</span></div>
                                    <div><button>-</button></div>
                                </div>
                            </td>
                            <td><button>i</button></td>
                        </tr>

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

                    <div class="subtotal">
                        <div>TOTAL COST :</div> <span>$ 1420</span>
                    </div>
                    <div><button class="checkout">CHECKOUT</button></div>

                </div>
            </section>
        </div>
    )
}

export default ShoppingCart;