import { INewproduct, IProduct, ISearchTypes } from 'apiService/types/productTypes'
import api from './api'



const prefix = (route: string) => {
    return `product/${route}`
}

export default {
  readOne: (id:string) => api.get<IProduct>(prefix(`?id=${id}`)),
  create: (data:INewproduct) => api.post<IProduct>('product', data),
  readOwn: () => api.get<IProduct>(prefix('own')),
  search: (data:ISearchTypes) => api.get<IProduct[]>(prefix(`search?${data.page != undefined &&  data.page}${data.limit != undefined && '&limit=' + data.limit}${data.name != undefined && '&name='+data.name}${data.username != undefined && '&username='+data.username}`)),
  update: (id:string, data:any) => api.patch<IProduct>(prefix(id), data)
}

