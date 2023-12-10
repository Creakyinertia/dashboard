import React from "react";
import "./sidebarnav.scss";
import { NavLink } from "react-router-dom";
interface SideNavProps {
  children: React.ReactNode;
}

const SidebarNav: React.FC<SideNavProps> = ({ children }) => {
  const menuItems = [
    {
      path: "/",
      name: "Main",
      icon: "icon",
    },
    {
      path: "/addnew",
      name: "Add",
      icon: "icon",
    },
    {
      path: "/employee",
      name: "Employees",
      icon: "icon",
    },
    {
      path: "/customer",
      name: "Customers",
      icon: "icon",
    },
    {
      path: "/salary",
      name: "Salary",
      icon: "icon",
    },
  ];
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar">
          {menuItems.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <div className="main">
          <div className="logo">Admin panel</div>
          {children}
          <div className="footer"> &copy;2023 </div>
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
