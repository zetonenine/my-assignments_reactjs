import React from 'react';
import './Modal.css'

const Modal = ({active, setActive, status}) => {

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <h1> {active['fname']} {active['name']} </h1> 
                <span>{active['fname']}</span>
                <span>{active['name']}</span>  
                <span>{active['mname']}</span>  

                <span>{status[active['status']]}</span> 
            </div>
        </div>
    );
};

export default Modal;