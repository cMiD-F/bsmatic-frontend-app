import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Navigate to="/login" replace />
  );
};
