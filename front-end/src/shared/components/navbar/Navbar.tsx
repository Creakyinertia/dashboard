import React from 'react'
import './navbar.scss'
import { RiMenuUnfoldLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const handleOnclickAddNew = () => {

  }
  return (
    <div className="nav-main">
      <span className="icon">
        <RiMenuUnfoldLine />
        <span className="icon-title">Dashdoard</span>
      </span>

      <div className="nav-set">
        <span>
          <Dropdown>
            <Dropdown.Toggle className="addnew-button" id="dropdown-basic">
              Add new
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link to='/addemployee'>
                <Dropdown.Item href="/employee-form">Employee</Dropdown.Item>
              </Link>
              <Link to='/addcustomer'>
                <Dropdown.Item href="/employee-form">Customer</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </span>
        <span>
          <IoNotificationsOutline />
        </span>
        <span>
          <FaRegCircleUser />
        </span>
      </div>
    </div>
  );
}

export default Navbar