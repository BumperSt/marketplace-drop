import api from './api'
import { IAvaliation, IAvaliationResponse } from './types/avaliationTypes'

const prefix = (route: string) => {
    return `avaliation/${route}`
}



export default {
  create: (data:IAvaliation) => api.post<IAvaliationResponse>('avaliation', data),
  list: (data:{page? : number, limit? : number, to? : string}) => api.get<IAvaliationResponse>(prefix(`list?${data.page && 'page='+data.page}${data.limit && '&limit='+data.limit}${data.to && 'to='+data.to}`)),
  delete: (id:string) => api.delete<IAvaliationResponse>(prefix(id)),
}