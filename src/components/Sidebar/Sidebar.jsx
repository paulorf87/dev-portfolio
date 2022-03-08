import React from "react";

import "./Sidebar.scss"; 

const Sidebar = ({children}) => {
    return <aside className="sidebar">
        {children}
    </aside>
}

export default Sidebar; 