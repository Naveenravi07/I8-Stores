import { combineReducers, createStore } from '@reduxjs/toolkit'
import AuthSlice from './Auth.Slice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CartSlice from './Cart.Slice';

const persistConfig = {
    key: "root",
    storage,
    whitelist:['auth','cart']
};

const reducers = combineReducers({
auth:AuthSlice,
cart:CartSlice
})

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
let persistor = persistStore(store);

export {persistor,storage}
export default store
