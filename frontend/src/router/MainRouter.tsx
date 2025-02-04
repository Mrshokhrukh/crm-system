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

const createRouteByRole = (userRole: any) => {
  const routes = RoleRoutes[userRole?.toUpperCase()] || [];
  return routes.map(({ path, element }) => ({
    path,
    element: React.createElement(element),
  }));
};

type MainRouterProps = {};

const MainRouter: React.FC<MainRouterProps> = () => {
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
      children: [
        {
          index: true,
          path: "/dashboard",
          element: <Home />,
        },
        {
          index: true,
          path: "/products",
          element: <ProductsList />,
        },
      ],
      // createRouteByRole(user?.role)
    },
  ]);

  return <RouterProvider router={router} />;
};
export default MainRouter;
