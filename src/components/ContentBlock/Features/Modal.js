import React from 'react';
import './Modal.css'

const Modal = ({active, setActive, status}) => {

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className='modal_header'>
                    <p className='title'> {active['fname']} {active['name']} </p> 
                </div>
                <span>{active['fname']}</span>
                <span>{active['name']}</span>  
                <span>{active['mname']}</span>  

                <span>{status[active['status']]}</span> 
            </div>
        </div>
    );
};

export default Modal;