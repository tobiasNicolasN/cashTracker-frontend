import { ReactNode } from "react";

export interface IAuthProviderProps {
    children?: ReactNode;
  }
  
export interface IAuthContext {
    authenticated: boolean;
    setAuthenticated: (newState: boolean) => void;
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    register: (username: string, email: string, password: string) => Promise<any>;
    login: (email: string, password: string) => Promise<any>;
    logout: () => void;
  }
  
export interface IUser {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  }