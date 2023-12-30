import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "../shared/components/navbar/Navbar";
import Sidebar from "../shared/components/sidebar/Sidebar";
import Footer from "../shared/components/footer/Footer";
import Dashboard from "../view/dashboard/Dashboard";
import Customers from "../view/customers/Customers";
import Employees from "../view/employees/Employees";
import Salary from "../view/salary/Salary";
import Customer from "../view/customer/Customer";
import Employee from "../view/employee/Employee";
import PageNotFound from "../view/pageNotFound/PageNotFound";
import Login from "../view/login/Login";
import AddnewEmployee from "../view/addnewEmployee/AddnewEmployee";
import AddnewCustomer from "../view/addnewCustomer/AddnewCustomer";
const Routing = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="wrapper">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="content-wrapper">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/customers",
          element: <Customers />,
        },
        {
          path: "/employees",
          element: <Employees />,
        },
        {
          path: "/customers/:id",
          element: <Customer />,
        },
        {
          path: "/employees/:id",
          element: <Employee />,
        },
        {
          path: "/salary",
          element: <Salary />,
        },
        {
          path: "/addemployee",
          element:<AddnewEmployee />,
        },
        {
          path: "/addcustomer",
          element: <AddnewCustomer />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routing;
