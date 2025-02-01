import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar/Sidebar";
import Header from "../ui/Header/Header";

type RootLayoutProps = {};

const RootLayout: React.FC<RootLayoutProps> = () => {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
