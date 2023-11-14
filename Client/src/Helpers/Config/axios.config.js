import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://innov8-9400.onrender.com',
})

export default instance
