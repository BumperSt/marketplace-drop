import { IUser } from "./userTypes";

export interface ILoggedUser {
    token: string,
    user: IUser
}

export interface IRegister {
    fullName:string,
    cpf:string,
    phone:string,
    email:string,
    password:string
}

export interface ILogin {
    email:string
    password:string
}