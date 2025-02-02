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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/erp",
      element: (
        <PrivateRouter roles={[user?.role]}>
          <RootLayout />
        </PrivateRouter>
      ),
      children: createRouteByRole(user?.role),
    },
  ]);

  return <RouterProvider router={router} />;
};
export default MainRouter;
