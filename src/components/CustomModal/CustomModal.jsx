import React from "react";
import Modal from "@mui/material/Modal";  

import "./CustomModal.scss"; 

const CustomModal = ({children, open, handleClose}) => {
    
    return <Modal
    open={open}
    onClose={handleClose}>
        {children}        
    </Modal>
}

export default CustomModal; 