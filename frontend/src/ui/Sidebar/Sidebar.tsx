import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RoleRoutes } from "../../router/roleBasedRoutes";
import useAuth from "../../hooks/useAuth";
import { CircleCheck } from "lucide-react";

import { useNavigate } from "react-router-dom";
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

const menuItems = [
  { icon: LayoutDashboard, label: "Bosh sahifa", path: "/dashboard" },
  {
    icon: Package,
    label: "Mahsulotlar",
    subItems: [
      { icon: ListOrdered, label: "Mahsulotlar royxati", path: "/products" },
      { icon: ShoppingCart, label: "Sotuvlar royxati", path: "/sales" },
      { icon: Download, label: "Tushirilgan mahsulotlar royxati", path: "/downloaded-products" },
      { icon: RotateCcw, label: "Qaytgan mahsulotlar royxati", path: "/returned-products" },
      { icon: ClipboardList, label: "Buyurtmalar royxati", path: "/orders" },
      { icon: History, label: "Mahsulotlar tarixi", path: "/product-history" },
      { icon: Boxes, label: "Turkunlar royxati", path: "/categories" },
      { icon: Tags, label: "Teglar royxati", path: "/tags" },
      { icon: SlidersHorizontal, label: "Atributlar royxati", path: "/attributes" },
      { icon: Building2, label: "Tashkilotning barcha mahsulotlari", path: "/organization-products" },
      { icon: LineChart, label: "Qoldiqlar ozgarish tarixi", path: "/stock-history" },
      { icon: DollarSign, label: "Narxlar ozgarish tarixi", path: "/price-history" },
    ],
  },
  { icon: Package, label: "Ombar", path: "/warehouse" },
  { icon: PieChart, label: "Ishlab chiqarish", path: "/production" },
  { icon: Handshake, label: "Yetkazuvchilar", path: "/suppliers" },
  { icon: Users, label: "Mijozlar", path: "/customers" },
];

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const subItems = menuItems?.find((val: any) => val.label === "Mahsulotlar")?.subItems;

  const toggleSubmenu = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  const handleNavigation = (path?: string) => {
    if (path) {
      navigate(path);
      setIsSidebarOpen(false);

      setActiveMenu(null);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  // console.log("in sidebar user: ", user);

  // const routes = RoleRoutes[user?.role.toUpperCase()];
  // const routes = RoleRoutes["CUSTOMER"];

  // return (
  //   // <div className="w-20 md:w-[300px] h-screen bg-slate-700 md:p-4 p-2 text-gray-400 border-r">
  //   //   <h1 className="md:block hidden text-2xl font-bold mb-8">Digimed Dental</h1>
  //   //   <div className="p-3 text-center md:hidden mb-10">
  //   //     <CircleCheck size={32} />
  //   //   </div>

  //   //   <nav>
  //   //     {routes?.map((item, index) => {
  //   //       return (
  //   //         <NavLink
  //   //           to={item.path}
  //   //           key={index}
  //   //           className={({ isActive }) =>
  //   //             `${isActive ? "bg-slate-800 text-white" : ""} flex items-center justify-center md:justify-start space-x-3 rounded-md
  //   //            hover:bg-slate-800 cursor-pointer mb-3 p-2 py-3 md:p-3 text-white`
  //   //           }
  //   //         >
  //   //           <item.icon size={20} />
  //   //           <span className="hidden md:block text-white">{item.title}</span>
  //   //         </NavLink>
  //   //       );
  //   //     })}
  //   //   </nav>
  //   // </div>
  // );

  return (
    <div className="relative flex h-screen">
      <div className={`bg-white border-r shadow-sm h-full transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-20"}`}>
        <div className="p-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                className={`hover:bg-slate-100 flex items-center space-x-3 p-3 rounded-lg cursor-pointer mb-2${
                  activeMenu === item.label ? "bg-green-50 text-green-700" : "hover:bg-gray-200"
                }`}
                onClick={() => {
                  if (item.subItems) {
                    toggleSubmenu(item.label);
                  } else if (item.path) {
                    handleNavigation(item.path);
                  }
                }}
              >
                <item.icon size={20} />
                {isSidebarOpen && (
                  <>
                    <span className="flex-1">{item.label}</span>
                    {item.subItems && <ChevronDown size={16} className={`transform transition-transform ${activeMenu === item.label ? "rotate-[90deg]" : "rotate-[-90deg]"}`} />}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {subItems && (
        <div className={`absolute left-[-300px] md:left-64 bg-white z-50 border-r h-full overflow-y-auto transition-all duration-300 ${activeMenu === "Mahsulotlar" ? "w-64 opacity-100" : "w-0 opacity-0"}`}>
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500 px-3">Mahsulotlar bo'limi</h3>
            </div>
            {subItems.map((subItem, index) => (
              <div
                key={index}
                className={`group flex items-center space-x-3 p-3 rounded-lg cursor-pointer mb-2 transition-colors duration-200 ${
                  activeSubItem === subItem.label ? "bg-green-50 text-green-700" : "hover:bg-gray-50"
                }`}
                onClick={() => {
                  setActiveSubItem(subItem.label);
                  handleNavigation(subItem.path);
                }}
              >
                <div className={`p-1.5 rounded-lg ${activeSubItem === subItem.label ? "bg-green-100" : "bg-gray-100 group-hover:bg-gray-200"}`}>
                  <subItem.icon size={16} className={activeSubItem === subItem.label ? "text-green-700" : "text-gray-600 group-hover:text-gray-700"} />
                </div>
                <span className="text-sm">{subItem.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Sidebar;
