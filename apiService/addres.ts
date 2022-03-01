import api from './api'
import { IAddress, IAddressUpdate } from './types/addressTypes'
import { IUser } from './types/userTypes'

const prefix = (route: string) => {
    return `user/${route}`
}



export default {
  addAddress: (data:IAddress) => api.post<IUser>(prefix('adresses'),data),
  updateAdress: (id:string, data:IAddressUpdate) => api.post<IUser>(prefix(`addresses/${id}`),data),
  delete: (id:string) => api.delete<IUser>(prefix(`addresses/${id}`))
}