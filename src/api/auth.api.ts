import { ILogin, IRegister } from '../interfaces/auth.interface'
import {instance} from './base.api'

const registerEndpoint = "register"
const loginEndpoint = "login"
const logoutEndpoint = "logout"


export const auth = {
    register : (user: IRegister) => instance.post(registerEndpoint, user),
    login : (user: ILogin) => instance.post(loginEndpoint, user),
    logout : () => instance.post(logoutEndpoint)

}