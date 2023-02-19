import React, { useState } from 'react';
import { useMutation, useQuery } from "../../convex/_generated/react";
import "./styling/popstyle.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const createNewProf = useMutation("createNewProf");
  const [profData, setProfData] = useState({ Name: '', Location: '' , Insurance: '',Last_Checkup: '', Provider: '', Issues: '', Notes: ''});
  const [date, setDate] = useState(new Date());

  async function handleSubmit(event) {
    event.preventDefault();
    // setNewMessageText("");
    console.log(profData)
    await createNewProf(profData.Name, profData.Location, profData.Insurance, profData.Last_Checkup, profData.Provider, profData.Issues, profData.Notes);
    togglePopup();
  }
  const handleChange = (event) => {
    
    const { name, value } = event.target;
    console.log(value)

    setProfData({ ...profData, [name]: value });
    console.log(profData)
  }

  const handleDate = (date) => {
    setDate(date)
    const day = date.getDate();
    const month = date.getMonth() + 1; // add 1 because getMonth() returns a zero-based index
    const year = date.getFullYear();
    setProfData({ ...profData, Last_Checkup: year+"-"+month+"-"+day});
    console.log(profData)
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
  const imageStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease-in-out',
  }
  return (
    <div>
      <button style = {imageStyle} onClick={togglePopup}>Add New Contact</button>
      {isOpen && (
        <div className="popup">
          <form onSubmit= {handleSubmit}>
            <h2>Add New Contact</h2>
            <label>
              Name:
              <input type="text" name= "Name" onChange={handleChange} />
            </label>
            <label>
              Location
              <input type="text" name= "Location" onChange={handleChange} />
            </label>
            <label>
              Insurance
              <input type = "text" name= "Insurance" onChange={handleChange}/>
            </label>
            <label>
              Last Checkup Date
              <DatePicker name = "Last_Checkup" selected={date} onChange={handleDate} />
            </label>
            <label>
              Healthcare Provider
              <input type="text" name= "Provider" onChange={handleChange} />
            </label>
            <label>
              Immediate Health Issues
              <input type="text" name= "Issues" onChange={handleChange} />
            </label>
            <label>
              Extra Notes
              <input type="text" name= "Notes" onChange={handleChange} />
            </label>
            <button>Submit</button>
          </form>
          <button onClick={togglePopup}>Close Form</button>
        </div>
      )}
    </div>
  );
}

export default PopupForm;