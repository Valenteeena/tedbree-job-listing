import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const accessToken = window.localStorage.getItem("token");

  return accessToken ? <Outlet /> : <Navigate to="/login" />;
}

export default Protected;
