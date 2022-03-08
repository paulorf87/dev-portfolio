import React from "react";

import List from "../../../components/List/List";

import "./SideGoals.scss"; 

const data = [
    "Master FrontEnd Development", 
    "Master BackEnd Development", 
    "AWS Solutions Architect Certification | Jun/2022"
]

const SideGoal = () => {
    return <div className="side-goals">
        <h2>Goals</h2>
        <List data={data}/>
    </div>
}

export default SideGoal; 