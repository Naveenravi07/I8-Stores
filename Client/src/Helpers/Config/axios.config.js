import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:42069'
})

export default instance
