import React, { useState } from "react";
import "./form.scss"
const AddCustomer: React.FC = () => {
  const [formData, setFormData] = useState({
    id: 1,
    name: "",
    phone: "",
    aadhar: "",
    number_of_guests: 0,
    room_number: 0,
    Bill: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // You can perform additional actions like sending data to a server here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Customer Form</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Aadhar Number:</label>
        <input
          type="text"
          name="aadhar"
          value={formData.aadhar}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Number of Guests:</label>
        <input
          type="number"
          name="number_of_guests"
          value={formData.number_of_guests}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Room Number:</label>
        <input
          type="number"
          name="room_number"
          value={formData.room_number}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Bill:</label>
        <input
          type="number"
          name="Bill"
          value={formData.Bill}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default AddCustomer;
