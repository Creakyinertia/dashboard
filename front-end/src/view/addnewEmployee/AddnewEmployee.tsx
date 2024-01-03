import React, { useState } from "react";
import './addnewEmployee.scss'
interface FormData {
  firstName: string;
  lastName: string;
  aadharCard: string;
  salary: number;
  gender: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const AddnewEmployee: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    aadharCard: "",
    salary: 0,
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="form-main">
      <h3 className="heading">Register new employee</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name*</label>
          <input
            id="firstname"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div>
          <label htmlFor="aadharCard">Aadhar Card*</label>
          <input
            id="aadharCard"
            type="text"
            name="aadharCard"
            value={formData.aadharCard}
            onChange={handleChange}
            placeholder="Enter your Aadhar card number"
            required
          />
        </div>
        <div>
          <label htmlFor="salary">Salary*</label>
          <input
            id="salary"
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Enter your salary"
            required
          />
        </div>
        <div>
          <label>Gender*</label>
          <label htmlFor="male">
            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              required
            />
            Female
          </label>
        </div>
        <div>
          <label htmlFor="email">Email Address*</label>
          <input
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number*</label>
          <input
            id="phoneNumber"
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password*</label>
          <input
            id="password"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            id="confirmPassword"
            type="text"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <div>

        <input id="accept" type="checkbox" required />{" "}
        <label htmlFor="accept">Accept the terms and conditions *</label>
        </div>
        <div className="bt">

        <button type="submit" className="register-btn">Register</button>
        </div>
      </form>
    </div>
  );
};

export default AddnewEmployee;
