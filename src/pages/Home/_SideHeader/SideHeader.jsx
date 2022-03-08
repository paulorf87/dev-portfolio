import React from "react";

import List from "../../../components/List/List";

import "./SideHeader.scss"; 

const data = [
    "FrontEnd Development", 
    "BackEnd Development", 
    "Cloud Solutions Architect"
]

const SideHeader = () => {
    return <header className="side-header">
        <div className="side-header-title">
            <h2>Paulo Ferro</h2>
            <img src="/img/engineer.jpg" alt="profile picture" />
            <p>FrontEnd Developer |  Freelancer</p>
        </div>
        
    </header>
}

export default SideHeader; 