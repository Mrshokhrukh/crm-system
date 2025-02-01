import { LogOut } from "lucide-react";
import React from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="h-16 flex items-center justify-between px-6 shadow-sm border-b bg-white">
      <div className="text-gray-700">
        Admin / Admin
      </div>
      <button className="p-3 hover:bg-gray-100 rounded-full">
        <LogOut className="text-gray-700"/>
      </button>
    </div>
  );
};
export default Header;
