import { createContext, ReactNode, useContext, useState } from "react";

interface IProps {
  children?: ReactNode;
}

interface IAuthContext {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
}

const initialValue = {
  authenticated: false,
  setAuthenticated: () => {},
};

export const AuthContext = createContext<IAuthContext>(initialValue);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useLang debe ser usado con un LangProvider");
  return context;
};

export const AuthProvider = ({ children }: IProps) => {
  const [authenticated, setAuthenticated] = useState(
    initialValue.authenticated
  );

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
