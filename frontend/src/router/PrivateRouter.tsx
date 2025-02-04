import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type PrivateRouterProps = {
  children: React.ReactNode;
  roles: any;
};

const PrivateRouter: React.FC<PrivateRouterProps> = ({ children, roles }) => {
  // const { user, isLoggedIn } = useAuth();

  // if (roles && !roles.includes(user?.role.toUpperCase())) {
  //   return <Navigate to="/" />;
  // }

  // if (!isLoggedIn && !user) {
  //   return <Navigate to="/" />;
  // }

  return children;
};
export default PrivateRouter;
