import { createSlice } from "@reduxjs/toolkit";
import { storage,persistor } from '../Store/Store'

const AuthSlice = createSlice({
    name: 'auth',
    initialState: { loggedIn: null,token:null },
    reducers: {
        loginUser: (state, action) => {
            return{
                loggedIn:true,
                token:action.payload.token
            }
        },
        logoutUser: async(state) => {
            await storage.removeItem('persist:root')
            Object.keys(state).map((key)=>state[key] = null )
        },
    }
})
export default AuthSlice.reducer
export const {loginUser,logoutUser} = AuthSlice.actions
