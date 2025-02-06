import Home from "../pages/Home";
import ProductsList from "../pages/ProductsList";
// import Registration from "../pages/registration/Registration";
import { ROUTES } from "../utils/enums";

import { Check, File, Home as HomeIcon, Info, User, Users2 } from "lucide-react";
import {
  LayoutDashboard,
  Package,
  Users,
  Handshake,
  PieChart,
  ChevronDown,
  ListOrdered,
  ShoppingCart,
  Download,
  RotateCcw,
  ClipboardList,
  History,
  Boxes,
  Tags,
  SlidersHorizontal,
  Building2,
  LineChart,
  DollarSign,
} from "lucide-react";

type Route = {
  title: string;
  path: string;
  element: any;
  icon: any;
  index?: boolean;
  subItems?: any[];
};

type RoutesType = {
  [key: string]: Route[]; // Allow different keys (e.g., ADMIN, USER)
};

export const RoleRoutes: RoutesType = {
  ADMIN: [
    { icon: LayoutDashboard, title: "Bosh sahifa", path: ROUTES.DASHBOARD, element: Home },
    {
      element: ProductsList,
      icon: Package,
      title: "Mahsulotlar",
      path: "/products",
      subItems: [
        { element: Home, icon: ListOrdered, title: "Mahsulotlar royxati", path: "/products/lists" },
        { element: Home, icon: ShoppingCart, title: "Sotuvlar royxati", path: "/products/sales" },
        { element: Home, icon: Download, title: "Tushirilgan mahsulotlar royxati", path: "/products/downloaded-products" },
        { element: Home, icon: RotateCcw, title: "Qaytgan mahsulotlar royxati", path: "/products/returned-products" },
        { element: Home, icon: ClipboardList, title: "Buyurtmalar royxati", path: "/products/orders" },
        { element: Home, icon: History, title: "Mahsulotlar tarixi", path: "/products/product-history" },
        { element: Home, icon: Boxes, title: "Turkunlar royxati", path: "/products/categories" },
        { element: Home, icon: Tags, title: "Teglar royxati", path: "/products/tags" },
        { element: Home, icon: SlidersHorizontal, title: "Atributlar royxati", path: "/products/attributes" },
        { element: Home, icon: Building2, title: "Tashkilotning barcha mahsulotlari", path: "/products/organization-products" },
        { element: Home, icon: LineChart, title: "Qoldiqlar ozgarish tarixi", path: "/products/stock-history" },
        { element: Home, icon: DollarSign, title: "Narxlar ozgarish tarixi", path: "/products/price-history" },
      ],
    },
    { element: Home, icon: Package, title: "Ombar", path: "/warehouse" },
    { element: Home, icon: PieChart, title: "Ishlab chiqarish", path: "/production" },
    { element: Home, icon: Handshake, title: "Yetkazuvchilar", path: "/suppliers" },
    { element: Home, icon: Users, title: "Mijozlar", path: "/customers" },
  ],
  CUSTOMER: [
    { icon: LayoutDashboard, title: "Bosh sahifa", path: ROUTES.DASHBOARD, element: Home },
    {
      element: ProductsList,
      icon: Package,
      title: "Mahsulotlar",
      path: "/products",
      subItems: [
        { element: ProductsList, icon: ListOrdered, title: "Mahsulotlar royxati", path: "/products/lists" },
        { element: Home, icon: ShoppingCart, title: "Sotuvlar royxati", path: "/products/sales" },
        { element: Home, icon: Download, title: "Tushirilgan mahsulotlar royxati", path: "/products/downloaded-products" },
        { element: Home, icon: RotateCcw, title: "Qaytgan mahsulotlar royxati", path: "/products/returned-products" },
        { element: Home, icon: ClipboardList, title: "Buyurtmalar royxati", path: "/products/orders" },
        { element: Home, icon: History, title: "Mahsulotlar tarixi", path: "/products/product-history" },
        { element: Home, icon: Boxes, title: "Turkunlar royxati", path: "/products/categories" },
        { element: Home, icon: Tags, title: "Teglar royxati", path: "/products/tags" },
        { element: Home, icon: SlidersHorizontal, title: "Atributlar royxati", path: "/products/attributes" },
        { element: Home, icon: Building2, title: "Tashkilotning barcha mahsulotlari", path: "/products/organization-products" },
        { element: Home, icon: LineChart, title: "Qoldiqlar ozgarish tarixi", path: "/products/stock-history" },
        { element: Home, icon: DollarSign, title: "Narxlar ozgarish tarixi", path: "/products/price-history" },
      ],
    },
    { element: Home, icon: Package, title: "Ombar", path: "/warehouse" },
    { element: Home, icon: PieChart, title: "Ishlab chiqarish", path: "/production" },
    { element: Home, icon: Handshake, title: "Yetkazuvchilar", path: "/suppliers" },
    { element: Home, icon: Users, title: "Mijozlar", path: "/customers" },
  ],
};
