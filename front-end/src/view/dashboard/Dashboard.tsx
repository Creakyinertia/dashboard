import React from "react";
import "./dashboard.scss";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const panels = [
    {
      path: "/employees",
      title: "Employees",
      icon: "",
    },
    {
      path: "/customers",
      title: "Customers",
      icon: "",
    },
    {
      path: "/salary",
      title: "Salary",
      icon: "",
    },
  ];
  return (
    <div className="dashboard-main">
      <div className="panels-wrapper">
        {panels?.map((panel) => (
          <Link to={panel.path}>
            <div className="panel">
              <div className="panel-icon">{panel.icon}</div>
              <div className="panel-title">{panel.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
