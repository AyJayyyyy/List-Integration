// EmployeeForm.js

import React, { useState } from 'react';
import './EmployeeForm.css'; // Import CSS file for styling

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to ${value}`);
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const updatedEmployees = JSON.parse(localStorage.getItem('employees')) || []; // Retrieve existing data or initialize as empty array
    updatedEmployees.push(formData); // Add new form data
    localStorage.setItem('employees', JSON.stringify(updatedEmployees)); // Store updated data
    setFormData({
      name: '',
      email: '',
      jobTitle: '',
      department: ''
    });
  };
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="employee-form">
      <h2>Employee Form</h2>

        <div className="input-group">
          <label className="input-label">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Job Title:</label>
          <input 
            type="text" 
            name="jobTitle" 
            value={formData.jobTitle} 
            onChange={handleChange} 
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Department:</label>
          <input 
            type="text" 
            name="department" 
            value={formData.department} 
            onChange={handleChange} 
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
