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
                <span>Developer Portfolio</span> UI/UX & WebApps
            </h1>
            <p className="home-banner-text-subtitle">
                I am a passionate, industrial engineer and self-taught computer programmer, who believes in the merge of 
                IT (Information Technology) and OT (Operational Technology) as the way for the future. I am continuously 
                improving my skills in <strong>Front-end and Back-end development</strong>, among other computer science
                fields, in order to build optimized soultions for businesses and non-profit endeavors.
                If you would like to know a little more about my work, you can click in the link bellow to contact me, 
                preview some of my projects or <a href="/docs/dev-resume.pdf" target="_blank"> click here</a> to check my Resume. 
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