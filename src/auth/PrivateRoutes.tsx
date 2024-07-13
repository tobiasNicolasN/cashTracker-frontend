import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoutes() {
  const { authenticated } = useAuth();

  if (!authenticated) return <Navigate to={"/login"} replace />;
  return <Outlet />;
}

export default PrivateRoutes;
