import { IUser } from "apiService/types/userTypes";
import { createContext } from "react";


export interface IUserContext {
    user:IUser,
    setUser(user:IUser):void,
    logOut():void
}

const UserContext = createContext<IUserContext>(null)


export default UserContext