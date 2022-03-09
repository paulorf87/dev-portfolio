import React from "react";

import "./SideSkills.scss"; 

import List from "../../../components/List/List";

const data ={
    left:[
        "Project Management", 
        "Agile | SCRUM", 
        "Software Architecture", 
        "Computer Networks", 
        "Internet of Things"
    ], 
    right:[
        "MS Office, Excel, Project, Visio",
        "UML",   
        "Git | GitHub", 
        "Web Development", 
        "Data Science", 
        "Postman"
    ]
} 
    

const SideSkills = () => {
    return <div className="side-skills">
        <h2>Other Skills</h2>
        <div className="side-skills-row">
            <div className="left">
                <List data={data.left}/>
            </div>
            <div className="right">
                <List data={data.right}/>
            </div>
        </div>
    </div>
}

export default SideSkills; 