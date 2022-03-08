import React from "react";
import DoneIcon from '@mui/icons-material/Done';

import "./List.scss"; 

const List = ({data}) => {
    return <ul className="list">
        {data && data.map((item,index)=>(
            <li key={index}><DoneIcon/><span>{item}</span></li>
        ))}
    </ul>

}

export default List; 