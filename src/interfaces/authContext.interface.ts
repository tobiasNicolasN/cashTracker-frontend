import {ReactNode} from 'react'
import { ILogin, IRegister, IUser } from "../interfaces/auth.interface";

export interface AuthProviderProps {
    children: ReactNode;
}

export interface AuthContextType {
    signup: (user: IRegister) => Promise<void>
    signin: (user: ILogin) => Promise<void>
    user : IUser | {}
    isAuthenticaded : boolean
}