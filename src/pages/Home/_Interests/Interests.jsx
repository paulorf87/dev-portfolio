import React from "react"; 

import "./Interests.scss"; 
import Tag from "../../../components/Tag/Tag";

const data = [
    {title: "Software Engrineering", color:"green"},
    {title:"Computer Programming", color:"green"},
    {title: "Computer Network", color:"#F2C85B"},
    {title: "Cybersecurity", color:"#F2C85B"}, 
    {title: "Serverless"},
    {title: "Cloud Computing"},
    {title: "Internet of Things (IoT)", color:"orangered"},
    {title: "Internet of Things (Industrial IoT)", color:"orangered"},
    {title: "Machine Learning", color:"#1874D3"},
    {title: "Artificial Intelligence", color:"#1874D3"},
    {title: "Automation", color:"yellow"},
    {title: "Robotics", color:"yellow"},
    {title:"Data Visualiation"}, 


]

const Interests = () => {
    return <div className="interests">
        <h2 className="title">Interests</h2>
        <div className="interests-group">
            {data.map((i, index)=>(<Tag key={index} color={i.color}>{i.title}</Tag>))}
        </div>
    </div>
}

export default Interests; 