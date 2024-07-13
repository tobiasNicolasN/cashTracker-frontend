import { createContext, ReactNode, useContext, useState } from "react";

interface IProps {
  children?: ReactNode;
}

interface IAuthContext {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  register: (username: string, email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
}

interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export const AuthContext = createContext<IAuthContext>({
  authenticated: false,
  user: null,
  setUser: () => {},
  setAuthenticated: () => {},
  register: async () => {},
  login: async () => {},
  logout: async () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useLang debe ser usado con un LangProvider");
  return context;
};

const baseUrl = `${import.meta.env.VITE_BASE_URL!}/api/`;

export const AuthProvider = ({ children }: IProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const res = await fetch(`${baseUrl}register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setAuthenticated(true); // Autoriza al usuario
      setUser(data);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Fallo al registrar: ", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${baseUrl}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error); // Si la respuesta es negativa se fuerza un error
      }

      setAuthenticated(true);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Fallo al logearse: ", error);
    }
  };

  const logout = async () => {
    try {
      const res = await fetch(`${baseUrl}logout`, {
        method: "POST",
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data);
      }
      setAuthenticated(false);
      console.log(data);
    } catch (error) {
      console.error("Fallo al deslogear: ", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        register,
        login,
        logout,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
