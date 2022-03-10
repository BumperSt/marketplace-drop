import axios from 'axios'

const api = axios.create({

    baseURL:'http://66.94.97.226:8080',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api