import React from "react";

import Carroussel from "../../../components/Carroussel/Carroussel";

import "./HomeProjects.scss"; 
import { slideData } from "./slide-data";

const HomeProjects = () => {
    return <div className="home-projects">
        <h2>Projects Preview</h2>
        <Carroussel data={slideData}/>
    </div>
}

export default HomeProjects; 