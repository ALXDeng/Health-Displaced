import React, { createContext, useState } from 'react';
import { useMutation, useQuery } from "../convex/_generated/react";
import Profile from "./components/Profile.jsx"
import Maps from "./pages/Maps"
import Healthmatch from "./pages/Healthmatch"
import Layout from "./pages/Layout";
import PopupForm from "./components/PopupForm.jsx"
import Header from './components/Header/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid'; 
import { ProfContext } from './ProfContext';
import profImg from './components/images/myprofile.jpeg'
import HeadBar from './components/HeadBar';
import ProfilePopup from './components/ProfilePopup';


export default function App() {
  // const [profOpen, setProfOpen] = useState(false);
  const contacts = useQuery("contacts") || [];

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [identifier, setIdentifier] = useState(false);

  const handleClick = (event, contactID)=>{
    console.log(`Clicked on ${contactID}`);
    // console.log(event.target.getAttribute('name'))
    setIsProfileOpen(true)
    setIdentifier(contactID)
  }
  function handleProfileClose(){
    setIsProfileOpen(false);
}
function handleProfileClose(){
  setIsProfileOpen(false)
}

  return (
    <main>
      <HeadBar />
      <h1>Contacts</h1>  
      
        <PopupForm />
        <Grid container spacing={3} gridTemplateColumns='repeat(3, 1fr)'>
          {contacts.map(contact => (
            <Grid item>
                <div data = {contact._id.id} onClick={event => handleClick(event, contact._id.id)}><Profile key = {contact._id.id} date = {contact.Last_Checkup} name = {contact.Name} loc = {contact.Location} insurance = {contact.Insurance}/></div>
            </Grid>
          ))}
          {isProfileOpen && (<ProfContext.Provider value={handleProfileClose}>
                              <ProfilePopup id = {identifier}/>
                            </ProfContext.Provider>)}
        </Grid>
    </main>
  );
}
