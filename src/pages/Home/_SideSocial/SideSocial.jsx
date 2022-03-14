import React from "react";
import { LinkedIn, GitHub } from "@mui/icons-material"; 

import "./SideSocial.scss"; 

const SideSocial = () => {
    return <div className="side-social">
        <a rel="noreferrer"
         href="https://www.linkedin.com/in/paulo-ferro-b739718b/" target="_blank">
            <LinkedIn className="linkedin"/>
        </a>
        <a rel="noreferrer" 
        href="https://www.github.com/paulorf87" target="_blank">
            <GitHub className="github"/>
        </a>
    </div>
}

export default SideSocial; 