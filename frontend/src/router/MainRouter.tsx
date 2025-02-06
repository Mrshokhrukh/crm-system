import React from "react";
import { RoleRoutes } from "./roleBasedRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../utils/enums";
import Login from "../pages/Login";
import RootLayout from "../layout/RootLayout";
import PrivateRouter from "./PrivateRouter";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import ProductsList from "../pages/ProductsList";
import useAuth from "../hooks/useAuth";

const createRouteByRole = (userRole: any) => {
  const routes = RoleRoutes[userRole?.toUpperCase()] || [];

  return routes.flatMap((route) => {
    const { path, element, subItems } = route;
    if (subItems && subItems.length > 0) {
      return [
        {
          path,
          element: React.createElement(element),
          children: subItems.map(({ path: subPath, element: subElement }) => ({
            path: subPath,
            element: React.createElement(subElement),
          })),
        },
      ];
    }
    return {
      path,
      element: React.createElement(element),
    };
  });
};

type MainRouterProps = {};

const MainRouter: React.FC<MainRouterProps> = () => {
  const { user } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <PrivateRouter roles={["ADMIN", "CUSTOMER"]}>
          <RootLayout />
        </PrivateRouter>
      ),
      children: createRouteByRole("customer"),
    },
  ]);

  return <RouterProvider router={router} />;
};
export default MainRouter;
