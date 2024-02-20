import { ReactNode } from "react";
import { ILogin, IRegister, IUser } from "../interfaces/auth.interface";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthContextType {
  signup: (user: IRegister) => Promise<void>;
  signin: (user: ILogin) => Promise<void>;
  cleanErrors: () => void;
  user: IUser | {};
  isAuthenticaded: boolean;
  error: IAuthReqErrors;
}

export interface IAuthReqErrors {
  error: string[];
}
