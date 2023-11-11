import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {cartItems:[],cartTotal:0},
    reducers: {
        addToCart: (state, action) => {
            let product = action.payload
            let existItem = state.cartItems.find((obj)=>obj.proId === product.proId)
            if(!existItem){
                product.quantity = 1
                return {
                    ...state,
                    cartItems:[...state.cartItems,product]
                }
            }else{
                return {
                    ...state,
                    cartItems:state.cartItems.map((obj)=>obj.proId == product.proId ? {...obj,quantity:obj.quantity+1}: obj)
                }
            }
        },
        removeFromCart: async(state,action) => {
            let product = action.payload
            let existItem = state.cartItems.find((obj)=>obj.proId === product._id)
            if(existItem){
                return {
                    ...state,
                    cartItems:state.cartItems.filter((obj)=>obj._id !== product._id)
                }
            }
        },
        
    }
})
export default cartSlice.reducer
export const {addToCart,removeFromCart} = cartSlice.actions
