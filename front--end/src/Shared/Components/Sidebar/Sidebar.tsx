import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const items = [
    {
      id: "1",
      title: "Dashboard",
      icon: <LuLayoutDashboard />,
      path: "/",
    },
    {
      id: "2",
      title: "Employees",
      icon: <FaPeopleGroup />,
      path: "/employees",
    },
    {
      id: "3",
      title: "Customers",
      icon: <MdPeopleAlt />,
      path: "/customers",
    },
    {
      id: "4",
      title: "Salary",
      icon: <FaMoneyCheckAlt />,
      path: "/salary",
    },
  ];
  return (
    <div className="main-sidebar">
      <ul>
        <div>
          {items?.map((item) => (
            <Link to={item.path}>
              <li key={item.id}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Sidebar