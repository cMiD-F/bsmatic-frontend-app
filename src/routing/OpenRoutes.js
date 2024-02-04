import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
export const OpenRoutes = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Navigate to="/" replace />
  );
};
