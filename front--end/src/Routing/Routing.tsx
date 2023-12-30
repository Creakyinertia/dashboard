import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from '../shared/components/navbar/Navbar';
import Sidebar from '../shared/components/sidebar/Sidebar';
import Footer from '../shared/components/footer/Footer';
import Dashboard from '../view/dashboard/Dashboard';
import Customers from '../view/customers/Customers';
import Employees from '../view/employees/Employees';
import Salary from '../view/salary/Salary';
import Customer from '../view/customer/Customer';
import Employee from '../view/employee/Employee';
import PageNotFound from '../view/pageNotFound/PageNotFound';
import Login from '../view/login/Login';
const Routing = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="sidebar-container">
            <Sidebar />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path:"/",
                element:<Dashboard />
            },
            {
                path:"/customers",
                element:<Customers />
            },
            {
                path:"/employees",
                element:<Employees />
            },
            {
                path:"/customers/:id",
                element:<Customer />
            },
            {
                path:"/employees/:id",
                element:<Employee />
            },
            {
                path:"/salary",
                element:<Salary />
            },
        ]
    },{
      path: '/login',
      element: <Login />
    },
    
    {
      path:"*",
      element: <PageNotFound />
    }
  ])
  return <RouterProvider router={router} />;
}

export default Routing