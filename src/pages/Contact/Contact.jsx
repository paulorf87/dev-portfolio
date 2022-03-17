import React, {useRef} from "react";
import emailjs from "@emailjs/browser";   

import Button from "@mui/material/Button"; 
import  CloseIcon  from "@mui/icons-material/Close";

import "./Contact.scss"; 


const Contact = ({handleContactClose}) => {
    const form = useRef(); 

    const sendEmail = (e)=> {
        e.preventDefault(); 
        emailjs.sendForm('service_6yy9mxn', 'template_isb6exc',
        form.current, 'ZxNps2BHQ6RvNRLaO').then(
            (result)=>{
                console.log(result.text); 
                console.log(form.current); 
                form.current.reset(); 
                handleContactClose(); 
            }, (err)=>{console.log(err.text)}
        ); 
    }

    return <div className="contact">
        <div className="contact-header">
            <h1>Contact</h1>
            <CloseIcon className="close-button" onClick={handleContactClose}/>
        </div>
        <p className="contact-message">To contact me you can call at <span>0416 292 958</span>, send an e-mail to <span>paulorf87@gmail.com</span> or fill up the form bellow.</p>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" placeholder="Enter Name" name="name"/>
            <label>Email</label>
            <input type="text" placeholder="Email Here" name="email"/>
            <label>Subject</label>
            <input type="text" placeholder="Subject" name="email"/>
            <label>Message</label>
            <textarea placeholder="Type Your Message Here"
            rows={10} name="message"/>
            <Button variant="outlined" type="submit">Submit</Button>
        </form>
    </div>
}

export default Contact; 