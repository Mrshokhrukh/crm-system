import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar/Sidebar";
import Header from "../ui/Header/Header";

type RootLayoutProps = {};

const RootLayout: React.FC<RootLayoutProps> = () => {
  const isOpen = true;
  return (
    <div className="flex gap-2">
      {/* <div className={`fixed ${isOpen ? "left-0" : "left-[-100%]"} sm:static z-50 transition-all duration-200`}> */}
      <div className={`max-w-[320px] hidden sm:block`}>
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
