import api from './api'
import { IDrop } from './types/dropTypes'
import { IProduct, ISearchTypes } from './types/productTypes'

const prefix = (route: string) => {
    return `drop/${route}`
}



export default {
  readOne: (id:string) => api.get<IProduct>(prefix(`?id=${id}`)),
  create: (data:IDrop) => api.post<IProduct>('drop',data),
  search: (data:ISearchTypes) => api.get<IProduct[]>(prefix(`search?${data.page && 'page ='+ data.page}${data.limit && '&limit=' + data.limit}${data.name && '&name='+data.name}`)),
  update: (id:string, data:any) => api.patch<IProduct>(prefix(id)),
  delete: (id:string) => api.delete<IProduct>(prefix(id))
}