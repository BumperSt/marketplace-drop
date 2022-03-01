export interface IUser{
    additionalInformations?: {
        instagram?: string,
        shoesSize?: string,
        whatsapp?: string
    },
    phone: string[],
    is_active: boolean,
    role: string,
    _id: string,
    fullName: string,
    cpf: string,
    email: string,
    addresses: [],
    createdAt: string,
    updatedAt: string,
    __v: number
}

export interface IBasicInfos{
    fullName:string, 
    cpf:string, 
    phone:string
}

export interface IAdditionalInfos{
    instagram?:string, 
    whatsapp?:string, 
    shoesSize?:string
}