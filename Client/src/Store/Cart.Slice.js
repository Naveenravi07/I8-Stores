import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {cartItems:[],cartTotal:0},
    reducers: {
        addToCart: (state, action) => {
            let product = action.payload
            let existItem = state.cartItems.find((obj)=>obj._id === product._id)
            if(!existItem){
                product.quantity = 1
                return {
                    ...state,
                    cartItems:[...state.cartItems,product]
                }
            }else{
                let productIdx = state.cartItems[existItem]
                productIdx.quantity += 1
                return {
                    ...state,
                    cartItems:[...state.cartItems]
                }
            }
        },
        removeFromCart: async(state,action) => {
            let product = action.payload
            let existItem = state.cartItems.find((obj)=>obj._id === product._id)
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
