import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://50.18.75.156:42069',
},{Credential:'same-origin'})

export default instance
