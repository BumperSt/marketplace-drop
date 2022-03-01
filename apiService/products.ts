import { INewproduct, IProduct, ISearchTypes } from 'apiService/types/productTypes'
import api from './api'



const prefix = (route: string) => {
    return `product/${route}`
}

export default {
  readOne: (id:string) => api.get<IProduct>(prefix(`?id=${id}`)),
  create: (data:INewproduct) => api.post<IProduct>('product', data),
  readOwn: () => api.get<IProduct>(prefix('own')),
  search: (data:ISearchTypes) => api.get<IProduct[]>(prefix(`search?${data.page && 'page ='+ data.page}${data.limit && '&limit=' + data.limit}${data.name && '&name='+data.name}`)),
  update: (id:string, data:any) => api.patch<IProduct>(prefix(id), data)
}

