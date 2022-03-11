import axios from 'axios'

const api = axios.create({

    baseURL:'http://66.94.97.226:8080',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


api.interceptors.request.use(async config => {
    const token = localStorage.getItem('@token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})


export default api