import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
interface SideNavProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SideNavProps> = ({ children }) => {
  const[isOpen,setisOpen] = useState(true)
  const toggle = () => setisOpen(!isOpen)
  const menuItems = [
    {
      path: "/",
      name: "dashboard",
      icon: "abc",
    },
    {
      path: "/addnew",
      icon: "abc",
      name: "Add new member",
    },
    {
      path: "/employee",
      name: "Employees",
      icon: "abc",
    },
    {
      path: "/customer",
      name: "Customers",
      icon: "abc",
    },
    {
      path: "/salary",
      name: "Salary",
      icon: "abc",
    }
  ];

  return (
    <div className="contain">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top-section">
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            logo
          </h1>
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
            {/* <FaBars onClick={toggle}/> */}
            Bars
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              className="link-text"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
