import React from "react";
import Box from "@mui/material/Box"; 
import TextField from "@mui/material/TextField";  

import "./Contact.scss"; 

const Contact = () => {

    return <div className="contact">
        <h1>Contact</h1>
        <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Enter Name"/>
        </form>
    </div>
}

export default Contact; 