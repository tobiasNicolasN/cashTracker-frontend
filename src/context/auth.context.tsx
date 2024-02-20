import { createContext, useContext, useState } from "react";
import { auth } from "../api/auth.api";
import { ILogin, IRegister, IUser } from "../interfaces/auth.interface";
import {
  IAuthProviderProps,
  IAuthContextType,
  IAuthReqErrors,
} from "../interfaces/authContext.interface";
import { AxiosError } from "axios";

const authContext = createContext<IAuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("useAuth debe ser usado con un AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | {}>({});
  const [isAuthenticaded, setIsAuthenticaded] = useState(false);
  const [error, setErrors] = useState<IAuthReqErrors>({ error: [] });

  const signup = async (userReq: IRegister) => {
    try {
      const res = await auth.register(userReq);
      setUser(res.data);
      setIsAuthenticaded(true);
      console.log(user);
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        const finalError = axiosError.response?.data as IAuthReqErrors;
        console.log(finalError);
        setErrors(finalError);
    }
  };

  const signin = async (userReq: ILogin) => {
    try {
      const res = await auth.login(userReq);
      setUser(res.data);
      setIsAuthenticaded(true);
      console.log(user);
    } catch (error) {
      const axiosError = error as AxiosError;
      const finalError = axiosError.response?.data as IAuthReqErrors;
      console.log(finalError);
      setErrors(finalError);
    }
  };

  const cleanErrors = () => {
    setErrors({ error: [] });
  };

  return (
    <authContext.Provider
      value={{ signup, signin, cleanErrors, user, isAuthenticaded, error }}
    >
      {children}
    </authContext.Provider>
  );
};
