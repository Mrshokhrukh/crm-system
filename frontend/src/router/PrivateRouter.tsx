import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

type PrivateRouterProps = {
  children: React.ReactNode;
  roles: any;
};

const PrivateRouter: React.FC<PrivateRouterProps> = ({ children, roles }) => {
  const { isLoggedIn, user } = useSelector(
    (state: any) => state.authentication
  );

  // if (roles && !roles.includes(user.role)) {
  //   return <Navigate to="/" />;
  // }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};
export default PrivateRouter;
