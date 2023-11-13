import '@/styles/globals.css'
import {useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import Store from '../Store/Store'
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from '../../src/Store/Store'
import instance from '@/Helpers/Config/axios.config';
import Navbarv2 from '../components/Navbarv2'

export default function App({ Component, pageProps }) {
    useEffect(()=>{
        if(Store.getState().auth.loggedIn){
            instance.interceptors.request.use(function(config){
                config.headers.authorization = 'Bearer ' + `${Store.getState().auth.token}`
                return config
            })
        }
    },[Store.getState().auth.loggedIn])

    return(
        <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor} >
        <div>
        <Navbarv2 />
        <ToastContainer />
        <Component {...pageProps} />
        </div>
        </PersistGate>
        </Provider>
    ) 
}
