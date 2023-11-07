import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: { loggedIn: null,token:null },
    reducers: {
        loginUser: (state, action) => {
            state.loggedIn = true;
            state.token = action.payload.token
        },
    }
})
export default AuthSlice.reducer
export const {loginUser} = AuthSlice.actions
