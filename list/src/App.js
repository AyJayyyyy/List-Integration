import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeForm from './Components/EmployeeForm';

function EmployeeList(props) {
  // Render the employee list
  return (
    <div className="employee-list">
      <ul>
        {props.employees.map((employee) => (
          <li key={employee.EmployeeId}>
            {/* Create a link to the employee detail page */}
            <Link to={`/employees/${employee.EmployeeId}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LocalStoragePreview() {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage when component mounts
    const data = JSON.parse(localStorage.getItem('employees'));
    if (data) {
      setStoredData(data);
    }
  }, []); // Add empty dependency array to run once on mount only

  return (
    <div>
      <h1>Employee List</h1>

      <ul>
        {storedData.map((employee, index) => (
          <li key={index}>
            Name: {employee.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [employees, setEmployees] = useState([]);

  // Function to add a new employee to the state variable employees
  const addEmployee = (employee) => {
    // Update state
    setEmployees(prevEmployees => [...prevEmployees, employee]);
    
    // Save data to local storage after adding employee
    localStorage.setItem('employees', JSON.stringify([...employees, employee]));
  };
  

  return (
    <div className="App">
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
      <LocalStoragePreview />
    </div>
  );
}

export default App;
