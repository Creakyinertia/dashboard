import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Dashboard from '../View/Dashboard/Dashboard'
import Employee from '../View/Employee/Employee'
import Customer from '../View/Customer/Customer'
import Salary from '../View/Salary/Salary'
import AddNew from '../View/AddNew/AddNew'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/addnew' element={<AddNew/>}/>
        <Route path='/employee' element={<Employee />}/>
        <Route path='/customer' element={<Customer />}/>
        <Route path='/salary' element={<Salary />}/>
    </Routes>
  )
}

export default Routing