import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";

interface GuestRoutesProps {
  redirectTo: string;
}

const GuestRoutes: React.FC<GuestRoutesProps> = ({ redirectTo }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default GuestRoutes;
