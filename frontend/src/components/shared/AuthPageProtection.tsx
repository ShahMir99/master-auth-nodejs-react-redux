import { RootState } from "@/store/Store";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthPageProtection = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated} = useSelector(
    (state: RootState) => state.authSlice
  );
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthPageProtection;
