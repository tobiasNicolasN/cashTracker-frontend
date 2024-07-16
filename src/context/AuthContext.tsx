import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import { IAuthContext, IAuthProviderProps, IUser } from "../interface/auth";

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

export const AuthProvider = ({ children }: IAuthProviderProps) => {
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
      setUser(data); // Guarda los datos del usuario
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

      setAuthenticated(true); // Autoriza al usuario
      setUser(data); // Guarda los datos del usuario
      console.log(data);
      return data;
    } catch (error) {
      console.error("Fallo al logearse: ", error);
    }
  };

  const logout = async () => {
    try {
      const res = await fetch(`${baseUrl}/logout`, {
        method: "POST",
      });
      Cookies.remove("token");
      const data = await res.json();
      setUser(null);
      setAuthenticated(false);
      console.log(data.message);
    } catch (error) {
      console.error(error);
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
