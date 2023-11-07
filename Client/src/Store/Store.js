import { combineReducers, createStore } from '@reduxjs/toolkit'
import AuthSlice from './Auth.Slice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist:['auth']
};

const reducers = combineReducers({
auth:AuthSlice,
})

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
let persistor = persistStore(store);

export {persistor,storage}
export default store
