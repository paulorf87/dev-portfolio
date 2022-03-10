import React from "react";
import CloseIcon from "@mui/icons-material/Close"; 

import Carroussel from "../../../components/Carroussel/Carroussel";

import "./HomeProjects.scss"; 
import { slideData } from "./slide-data";

const HomeProjects = ({handleClose}) => {
    return <div className="home-projects">
        <div className="home-projects-header">
            <h2>Projects Preview</h2>
            <CloseIcon className="close-button" onClick={handleClose}/>
        </div>
        <Carroussel data={slideData}/>
    </div>
}

export default HomeProjects; 