import React from "react";

import SideSocial from "../_SideSocial/SideSocial";

import "./SideHeader.scss"; 

const SideHeader = () => {
    return <header className="side-header">
        <div className="side-header-title">
            <h2>Paulo Ferro</h2>
            <img src="/img/paulo.jpg" alt="profile" />
            <p>Freelancer Developer </p>
            <SideSocial/>
        </div>
        
    </header>
}

export default SideHeader; 