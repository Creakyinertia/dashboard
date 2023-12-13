import React from 'react'
import './addnew.scss'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddEmployee from '../../Shared/Components/Forms/AddEmployee';
import AddCustomer from '../../Shared/Components/Forms/AddCustomer';
const AddNew = () => {
  return (
    <div className="addnew-main">
      <Tabs defaultActiveKey="employees" className="mb-3" fill>
        <Tab eventKey="employees" title="Add new Employee">
          <AddEmployee />
        </Tab>
        <Tab eventKey="contact" title=" Add new Customer">
          <AddCustomer />
        </Tab>
      </Tabs>
    </div>
  );
}

export default AddNew