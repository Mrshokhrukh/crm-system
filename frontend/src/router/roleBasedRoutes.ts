import Home from "../pages/Home";
import Registration from "../pages/registration/Registration";
import { ADMINROUTES, REGISTRETORROUTES } from "../utils/enums";

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
      path: ADMINROUTES.DASHBOARD,
      element: Home,
      index: true,
    },
    {
      icon: User,
      title: "hisobotlar",
      path: `${ADMINROUTES.HISOBOTLAR}`,
      element: Home,
    },
    {
      icon: File,
      title: "hujjatlar",
      path: `${ADMINROUTES.DOCUMENT}`,
      element: Home,
    },
    {
      icon: Info,
      title: "Ma'lumotlar",
      path: ADMINROUTES.MALUMOTLAR,
      element: Home,
    },
    {
      icon: Users,
      title: "Bemorlar",
      path: ADMINROUTES.BEMORLAR,
      element: Home,
    },
    {
      icon: Users2,
      title: "Hodimlar",
      path: ADMINROUTES.HODIMLAR,
      element: Home,
    },
    {
      icon: Package,
      title: "mahsulotlar",
      path: ADMINROUTES.MAHSULOT,
      element: Home,
    },
    {
      icon: Check,
      title: "Tekshiruv",
      path: ADMINROUTES.TEKSHIRUV,
      element: Home,
    },
    {
      icon: User,
      title: "Navbatlar",
      path: ADMINROUTES.NAVBATLAR,
      element: Home,
    },
  ],
  DEVELOPER: [],
  REGISTRATOR: [
    {
      icon: HomeIcon,
      title: "Bosh sahifa",
      path: REGISTRETORROUTES.DASHBOARD,
      element: Home,
    },
    {
      icon: File,
      title: "hujjatlar",
      path: `${REGISTRETORROUTES.DOCUMENT}`,
      element: Home,
    },
    {
      icon: Users,
      title: "Registratsiya",
      path: `${REGISTRETORROUTES.REGISTRATION}`,
      element: Registration,
    },
  ],
};
