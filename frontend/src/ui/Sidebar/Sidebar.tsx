import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RoleRoutes } from "../../router/roleBasedRoutes";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const { user } = useSelector((state: any) => state.authentication);
  console.log("in sidebar ", user);

  const routes = RoleRoutes[user?.role.toUpperCase()];

  return (
    <div className="w-72 h-screen bg-white p-4 text-black border-r">
      <h1 className="text-2xl font-bold mb-8">Digimed Dental</h1>

      <nav>
        {routes.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-100" : ""
                } flex items-center space-x-3 rounded-md hover:bg-gray-100 cursor-pointer mb-3 p-3`
              }
            >
              <item.icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};
export default Sidebar;
