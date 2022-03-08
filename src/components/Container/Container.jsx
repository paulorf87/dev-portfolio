import React from "react";

const styles = {
    maxWidth:1200, 
    width:"90%",
    margin:"0 auto",
}

const Container = ({children}) => {
    return <div className="container" style={styles}>
        {children}
    </div>
}

export default Container; 