import Home from "../pages/Home";
// import Registration from "../pages/registration/Registration";
import { ROUTES } from "../utils/enums";

import {
  Check,
  File,
  Home as HomeIcon,
  Info,
  Package,
  User,
  Users,
  Users2,
} from "lucide-react";

type Route = {
  title: string;
  path: string;
  element: any;
  icon: any;
  index?: boolean;
};

type RoutesType = {
  [key: string]: Route[]; // Allow different keys (e.g., ADMIN, USER)
};

export const RoleRoutes: RoutesType = {
  ADMIN: [
    {
      icon: HomeIcon,
      title: "Bosh sahifa",
      path: ROUTES.DASHBOARD,
      element: Home,
      index: true,
    },
    {
      icon: User,
      title: "hisobotlar",
      path: `${ROUTES.HISOBOTLAR}`,
      element: Home,
    },
    {
      icon: File,
      title: "hujjatlar",
      path: `${ROUTES.DOCUMENT}`,
      element: Home,
    },
    {
      icon: Info,
      title: "Ma'lumotlar",
      path: ROUTES.MALUMOTLAR,
      element: Home,
    },
    {
      icon: Users,
      title: "Bemorlar",
      path: ROUTES.BEMORLAR,
      element: Home,
    },
    {
      icon: Users2,
      title: "Hodimlar",
      path: ROUTES.HODIMLAR,
      element: Home,
    },
    {
      icon: Package,
      title: "mahsulotlar",
      path: ROUTES.MAHSULOT,
      element: Home,
    },
    {
      icon: Check,
      title: "Tekshiruv",
      path: ROUTES.TEKSHIRUV,
      element: Home,
    },
    {
      icon: User,
      title: "Navbatlar",
      path: ROUTES.NAVBATLAR,
      element: Home,
    },
  ],
  CUSTOMER: [
    {
      icon: HomeIcon,
      title: "Bosh sahifa",
      path: ROUTES.DASHBOARD,
      element: Home,
      index: true,
    },
    {
      icon: User,
      title: "hisobotlar",
      path: `${ROUTES.HISOBOTLAR}`,
      element: Home,
    },
    {
      icon: File,
      title: "hujjatlar",
      path: `${ROUTES.DOCUMENT}`,
      element: Home,
    },
    {
      icon: Info,
      title: "Ma'lumotlar",
      path: ROUTES.MALUMOTLAR,
      element: Home,
    },
    {
      icon: Users,
      title: "Bemorlar",
      path: ROUTES.BEMORLAR,
      element: Home,
    },
    {
      icon: Users2,
      title: "Hodimlar",
      path: ROUTES.HODIMLAR,
      element: Home,
    },
    {
      icon: Package,
      title: "mahsulotlar",
      path: ROUTES.MAHSULOT,
      element: Home,
    },
    {
      icon: Check,
      title: "Tekshiruv",
      path: ROUTES.TEKSHIRUV,
      element: Home,
    },
    {
      icon: User,
      title: "Navbatlar",
      path: ROUTES.NAVBATLAR,
      element: Home,
    },
  ],
};
