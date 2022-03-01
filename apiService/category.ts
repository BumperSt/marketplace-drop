import { ICategory, NewCategory } from 'apiService/types/categoryTypes'
import api from './api'




const prefix = (route: string) => {
    return `category/${route}`
}

export default {
  list: () => api.get<ICategory>(prefix('list')),
  getOne: (id:string) => api.get<ICategory>(prefix(`?id${id}`)),
  create: (data:NewCategory) => api.post('category', data),
  update: (id:string) => api.patch(prefix(id)),
  delete: (id:string) => api.delete(prefix(id)),
}