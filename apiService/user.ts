import { ILogin, IRegister } from 'apiService/types/authTypes'
import api from './api'
import { IAdditionalInfos, IBasicInfos, IUser } from './types/userTypes'

const prefix = (route: string) => {
    return `user/${route}`
}



export default {
  getMe: () => api.get<IUser>('user'),
  updateUsername: (data:{username:string}) => api.patch<IUser>(prefix('username'),data),
  updateBasicInformations: (data:IBasicInfos) => api.patch<IUser>(prefix('basic'), data),
  updateAdditionalInformations: (data:IAdditionalInfos) => api.patch<IUser>(prefix('additionalInformations'), data),

}