import React from "react"; 


import "./Tag.scss"; 

const Tag = ({children, color}) => {
    return <div className="tag" style={{backgroundColor:color ? color: "cyan"}}>
        {children}
    </div>
}

export default Tag; 