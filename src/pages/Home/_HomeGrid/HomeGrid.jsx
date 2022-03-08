import React from "react";
import { useSelector } from "react-redux";

import Card from "../../../components/Card/Card";
import Skill from "../../../components/Skill/Skill";
import "./HomeGrid.scss"; 


const HomeGrid = () => {
    const {frontEnd, backEnd, cloudServices} = useSelector(state=>state.skills);
    console.log(backEnd); 
    
    return <div className="home-grid">
        <Card title={frontEnd.title} img={frontEnd.img}>
            {frontEnd.data && frontEnd.data.map(skill => (
                <Skill key={skill.id}>{skill.title}</Skill>
            ))}
        </Card>
        <Card title={backEnd.title} img={backEnd.img}>
        {backEnd.data && backEnd.data.map(skill => (
                <Skill key={skill.id}>{skill.title}</Skill>
            ))}
        </Card>
        <Card title={cloudServices.title} img={cloudServices.img}>
            {cloudServices.data && cloudServices.data.map(skill=>(
                <Skill key={skill.id}>{skill.title}</Skill>
            ))}
        </Card>
    </div>

}

export default HomeGrid; 