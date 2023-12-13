import React from 'react'
import './dashboard.scss'
import { NavLink } from 'react-router-dom'


const Dashboard = () => {
  return (
    <>
      <div className="main-container">
        <div className="tiles">
          <NavLink to={"/employee"}>
            <div className="tile">
              <span className="title">Emloyees</span>
            </div>
          </NavLink>
          <NavLink to={"/customer"}>
            <div className="tile">
              <span className="title">Customers</span>
            </div>
          </NavLink>
          <NavLink to={"/salary"}>
            <div className="tile">
              <span className="title">Salary</span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Dashboard
