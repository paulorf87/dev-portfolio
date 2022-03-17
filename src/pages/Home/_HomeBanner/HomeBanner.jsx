import React, { useState} from "react";
import Modal from "@mui/material/Modal"; 

import HomeProjects from "../_HomeProjects/HomeProjects";
import Contact from "../../Contact/Contact";
import Button from "../../../components/Button/Button";

import "./HomeBanner.scss"; 


const HomeBanner = () => {

    const [open, setOpen]=useState(false);
    const [contactOpen, setContactOpen]=useState(false); 
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);
    const handleContactClose = () =>setContactOpen(false); 

    return <header className="home-banner">
        <div className="home-banner-text">
            <h1 className="home-banner-text-title">
                <span>Paulo Ferro</span> Freelancer User Interface Developer
            </h1>
            <p className="home-banner-text-subtitle">
                I am a passionate, self-taught computer programmer who believes in impacting society through the use of technology. 
                I am constantly improving my frontend and backend development skills in order to develop different 
                techniques and processes to ensure quality solutions for my clients. 
                <a href="/docs/cs-git.pdf" target="_blank">Click here for the CV</a> or the link below to view some of my concept projects or contact me for more information. 
            </p>
            <div className="home-banner-actions">
                <Button onClick={()=>setContactOpen(true)}>Contact</Button>
                <Button onClick={handleOpen}>Projects</Button>
            </div>                
        </div>
        <Modal open={contactOpen} onClose={()=>setContactOpen(false)}>
            <div className="box">
                <Contact handleContactClose={handleContactClose}/>
            </div>
        </Modal>
        <Modal open={open} onClose={handleClose}>
            <div className="box">
                <HomeProjects handleClose={handleClose}/>
            </div>
        </Modal>
        <img src="/img/banner.svg" alt="" className="home-banner-img"/>
    </header>
}

export default HomeBanner; 