import { LogOut } from "lucide-react";
import React from "react";
import { MessageSquare, Maximize2, Bell, User, Menu } from 'lucide-react';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-white border-b px-4 py-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="lg:hidden">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-medium">Xozmat.uz</h1>
        <div className="hidden md:flex space-x-2">
          <button className="px-3 py-1 rounded bg-green-700 text-white">Giudko</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">So'm</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">O'zbekcha</button>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center space-x-2 text-gray-600">
          <MessageSquare size={20} />
          <span>Balans: 7 500</span>
        </div>
        <Maximize2 className="hidden md:block text-gray-600" size={20} />
        <Bell className="text-gray-600" size={20} />
        <div className="flex items-center space-x-2">
          <User className="text-gray-600" size={20} />
          <span className="hidden md:inline">998974200996</span>
        </div>
      </div>
    </div>
  </header>
  );
};
export default Header;
