import React, { useState, ChangeEvent, FormEvent } from "react";
import "./form.scss";
import Button from "react-bootstrap/Button";
import ConfirmModal from "../Modals/ConfirmModal";

interface EmployeeFormData {
  id: number;
  name: string;
  age: number;
  gender: string;
  aadhar: string;
  salary: number;
  designation: string;
}

const AddEmployee: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState<EmployeeFormData>({
    id: 1,
    name: "",
    age: 0,
    gender: "male",
    aadhar: "",
    salary: 0,
    designation: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: e.target.value,
    }));
  };

  let tempData = {
    id: 1,
    name: "",
    age: 0,
    gender: "male",
    aadhar: "",
    salary: 0,
    designation: "",
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setModalShow(true)
    tempData = {...formData}
    setFormData({
      id: 1,
      name: "",
      age: 0,
      gender: "male",
      aadhar: "",
      salary: 0,
      designation: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Employee Form</h3>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Gender</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleRadioChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleRadioChange}
              required
            />
            Female
          </label>
        </div>
        <div>
          <label>Aadhar Number</label>
          <input
            type="text"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <ConfirmModal data={tempData} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AddEmployee;
