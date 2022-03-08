import React from "react";

import "./Card.scss"; 

const Card = ({children, title, img}) => {
    return <div className="card">
        <header>
            <h2>{title}</h2>
        </header>
        <div>
            {img}
        </div>
        <main>
            <h4 className="card-subtitle"></h4>
            <p className="card-intro"></p>
            <div className="card-text">{children}</div>
        </main>
    </div>
}

export default Card; 