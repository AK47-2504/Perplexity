import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../../global/components/Loading";
import { Navigate } from "react-router";

const Protected = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;
