import React from "react";
import { RoleRoutes } from "./roleBasedRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../utils/enums";
import Login from "../pages/Login";
import RootLayout from "../layout/RootLayout";
import PrivateRouter from "./PrivateRouter";
import { useSelector } from "react-redux";

const createRouteByRole = (userRole: any) => {
  const routes = RoleRoutes[userRole?.toUpperCase()] || [];

  return routes.map(({ path, element }) => ({
    path,
    element: React.createElement(element),
  }));
};

type MainRouterProps = {};

const MainRouter: React.FC<MainRouterProps> = () => {
  const { user } = useSelector((state: any) => state.authentication);
  
  console.log(user);
  
  const router = createBrowserRouter([
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <PrivateRouter roles={["ADMIN", "CUSTOMER"]}>
          <RootLayout />
        </PrivateRouter>
      ),
      children: createRouteByRole(user?.role),
    },
  ]);

  return <RouterProvider router={router} />;
};
export default MainRouter;
