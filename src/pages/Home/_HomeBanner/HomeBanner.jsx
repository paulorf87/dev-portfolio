import React, { useState} from "react";
import Modal from "@mui/material/Modal"; 

import HomeProjects from "../_HomeProjects/HomeProjects";

import "./HomeBanner.scss"; 

import Button from "../../../components/Button/Button";

const HomeBanner = () => {

    const [open, setOpen]=useState(false);
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);

    return <header className="home-banner">
        <div className="home-banner-text">
            <h1 className="home-banner-text-title">
                Hey, I'm <span>Paulo</span>, Freelancer <span>User Interface Developer</span>
            </h1>
            <p className="home-banner-text-subtitle">
                Passionate, self-taught computer programmer. Continuously improoving my FrontEnd and BackEnd Development Skills.
                <span>Click</span> in the link down bellow to see some of my concept projects or to contact me for more information. 
            </p>
            <div className="home-banner-actions">
                <Button>Contact</Button>
                <Button onClick={handleOpen}>Projects</Button>
            </div>                
        </div>
        <Modal open={open} onClose={handleClose}>
            <div className="box" onClick={()=>console.log("closed modal")}>
                <HomeProjects/>
            </div>
        </Modal>
        <img src="/img/banner.svg" alt="" className="home-banner-img"/>
    </header>
}

export default HomeBanner; 