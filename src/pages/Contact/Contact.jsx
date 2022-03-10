import React from "react";
// import Box from "@mui/material/Box"; 
// import TextField from "@mui/material/TextField";  

import Button from "@mui/material/Button"; 
import  CloseIcon  from "@mui/icons-material/Close";

import "./Contact.scss"; 


const Contact = ({handleContactClose}) => {

    return <div className="contact">
        <div className="contact-header">
            <h1>Contact</h1>
            <CloseIcon className="close-button" onClick={handleContactClose}/>
        </div>
        <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Enter Name"/>
            <label>Company</label>
            <input type="text" placeholder="Company Name Here"/>
            <label>Subject</label>
            <input type="text" placeholder="Subject"/>
            <label>Message</label>
            <textarea placeholder="Type Your Message Here"
            rows={10}/>
            <Button variant="outlined" type="submit">Submit</Button>
        </form>
    </div>
}

export default Contact; 