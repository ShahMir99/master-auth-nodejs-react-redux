import { RootState } from "@/store/Store";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authSlice
  );

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="h-full w-full relative bg-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
