import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../userContext/userContext";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoutes({ children }: Props) {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}
