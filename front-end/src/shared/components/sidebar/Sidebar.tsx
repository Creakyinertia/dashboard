import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { AiOutlinePieChart } from "react-icons/ai";
const Sidebar = () => {
  const iconStyles = { color: "white", fontSize: "1.5em" };
  const employee = (
    <NavDropdown title="employee" >
      <NavDropdown.Item href="#action/3.1">View employees</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.2">Add new employee</NavDropdown.Item>
    </NavDropdown>
  );

  const items = [
    {
      id: "1",
      title: "Dashboard",
      icon: <AiOutlinePieChart style={iconStyles} />,
      path: "/",
    },
    {
      id: "2",
      title: 'Employees',
      icon: <FaPeopleGroup style={iconStyles} />,
      path: "/employees",
    },
    {
      id: "3",
      title: "Customers",
      icon: <MdPeopleAlt style={iconStyles} />,
      path: "/customers",
    },
    {
      id: "4",
      title: "Salary",
      icon: <FaMoneyCheckAlt style={iconStyles} />,
      path: "/salary",
    },
  ];
  return (
    <div className="side-wrapper">
      <ul>
        <li className="side-logo">Logo</li>
        {items?.map((item) => (
          <Link to={item.path}>
            <li key={item.id} className="items">
              <span className="item-icon">{item.icon}</span>
              <span className="item-title">{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
