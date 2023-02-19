import React, { useContext } from 'react';
import { useMutation, useQuery } from "../../convex/_generated/react";
import "./styling/profilePop.css"
import { ProfContext } from '../ProfContext';
import profImg from './images/profile.png'



function ProfilePopup(props){
    console.log(props.id)
    const contacts = useQuery("contacts") || [];
    const contact = contacts.find(contact => contact._id.id === props.id);
    console.log(contact)

    const handleProfileClose = useContext(ProfContext);
    function ProfileClose(){
        handleProfileClose(false)
    }



    return (
        // <h1>hello</h1>
        (<div className="popup-container">
            <div className="popup-content">
            <button className="popup-close" onClick={ProfileClose}>
                &times;
            </button>
            <div className="profile-info">
                <img src={profImg} alt="User profile" />
                <div>
                <h2>{contact.Name}</h2>
                <p>Location: {contact.Location}</p>
                <p>Medicare status: {contact.Insurance}</p>
                <p>Last checkup: {contact.Last_Checkup}</p>
                <p>Healthcare Provider: {contact.Provider}</p>
                <p>Immediate Health Issues: {contact.Issues}</p>
                <p>Other Notes: {contact.Notes}</p>
                </div>
            </div>
            </div>
        </div>)
    )
    
}
export default ProfilePopup;