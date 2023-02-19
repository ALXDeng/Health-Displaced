import React, {useState, useContext } from 'react';
import myProf from './images/profile.png'
import Card from "react-bootstrap/Card"
import "./styling/card.css"
import { ProfContext } from '../ProfContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Profile(props){
    const {isProfileOpen, setIsProfileOpen} = useContext(ProfContext);
    const [identifier, setIdentifier] = useState(null);
    
    const lastDate = new Date(props.date);
    const currentDate = new Date();

    const differenceInMilliseconds =  currentDate.getTime() - lastDate.getTime();
    const differenceInDays = differenceInMilliseconds / (24 * 60 * 60 * 1000);
    const showRedDot = differenceInDays > 365;
    

    const imageStyle = {
        width: "100px",
        height: "100px",
        borderRadius: '75%',
        padding: "10px"
    };
    function handleClick(event){
        // event.stopPropagation();
        setIdentifier(props.name)
        setIsProfileOpen(true)
        console.log(identifier)
    }
    
    function handleProfileClose(){
        setIsProfileOpen(false)
    }
    const dotStyle = {
        position: "absolute",
        bottom: "5px",
        right: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "red",
        display: showRedDot ? "block" : "none",
      };
    
    return (
        <>
        <div style={{ position: "relative" }}>
        <Card  border="primary">
            <Card.Img variant="top" src={myProf} style={imageStyle}/>
            <Card.Body>
                <Card.Title>Name: {props.name}</Card.Title>
                <Card.Text>
                    <p>Location: {props.loc}</p>
                    <p>Insurance Status: {props.insurance}</p>
                </Card.Text>
            </Card.Body>
        </Card>
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
    </div>

        



        {/* <div style = {profile}>
            <img src={myProf} alt="sexy alex" style = {imageStyle}/>
            <div styles = {infoStyle}>
                    <p>Name: </p><p> {props.name}</p>
                    <p>Location: </p><p>{props.loc}</p>
                    <p>Status: </p><p>{props.status}</p>
            </div>
        </div> */}
        </>
    );
}

export default Profile;