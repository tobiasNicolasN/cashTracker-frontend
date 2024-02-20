import { createContext, useContext, useState } from "react";
import { auth } from "../api/auth.api";
import { ILogin, IRegister, IUser } from "../interfaces/auth.interface";
import {
  AuthProviderProps,
  AuthContextType,
} from "../interfaces/authContext.interface";

const authContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error("useAuth debe ser usado con un AuthProvider")
    return context
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser | {}>({});
  const [isAuthenticaded, setIsAuthenticaded] = useState(false)

  const signup = async (userReq: IRegister) => {
    try {
      const res = await auth.register(userReq);
      setUser(res.data);
      setIsAuthenticaded(true)
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async (userReq: ILogin) => {
    try {
      const res = await auth.login(userReq);
      setUser(res.data);
      setIsAuthenticaded(true)
      console.log(user)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <authContext.Provider value={{ signup, signin, user, isAuthenticaded }}>{children}</authContext.Provider>
  );
};
