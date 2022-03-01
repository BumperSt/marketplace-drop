import { ILogin, IRegister, ILoggedUser } from 'apiService/types/authTypes'
import api from './api'

const prefix = (route: string) => {
    return `auth/${route}`
}



export default {
  register: (data:IRegister) => api.post<ILoggedUser>(prefix('register'),data),
  login: (data:ILogin) => api.post<ILoggedUser>(prefix('login'),data),
}