import '@/styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
    return(
        <div>
        <ToastContainer />
        <Component {...pageProps} />
        </div>
    ) 
}
