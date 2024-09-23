import { RootState } from "@/store/Store";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";

const RecoveryPageProtection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.authSlice);
  const { isPassowrdForgot, secureKey } = useSelector((state: RootState) => state.recoverySlice);
  
  const [searchParams] = useSearchParams();
  const securityKey = searchParams.get("securiy_key");
  const isValid = searchParams.get("isvalid");

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (
    !isAuthenticated &&
    isPassowrdForgot &&
    secureKey === securityKey &&
    isValid
  ) {
    return children;
  }
  return <Navigate to="/auth" replace />;
};

export default RecoveryPageProtection;
