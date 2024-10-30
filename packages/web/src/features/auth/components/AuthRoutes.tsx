import React from "react";
import { useAuth } from "../AuthContext";
import { Navigate, Outlet } from "react-router-dom";

interface AuthRoutesProps {
  redirectTo: string;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({ redirectTo }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default AuthRoutes;
