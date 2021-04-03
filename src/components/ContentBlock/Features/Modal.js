import React from 'react';
import './Modal.css'

export default function Modal(props){
    
    const handleClick = (e) => {
        e.stopPropagation();
        props.setActive(false)
    }
    
    return(
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className='modal_header'>
                    <p className='title'> {props.active['fname']} {props.active['name']} </p> 
                    <p className='x' onClick={(e) => handleClick(e)}>x</p>
                </div>
                <hr className='hr'/>
                <div className='modal_body'>
                    <input className='input' value= {props.active['fname']} readOnly></input>
                    <input className='input' value={props.active['name']} readOnly></input>
                    <input className='input' value={props.active['mname']} readOnly></input>
                    <input className='input' value={props.status[props.active['status']]} readOnly></input>
                </div>
                <button className='save_button' onClick={(e) => handleClick(e)}>Сохранить</button>
            </div>
        </div>
    );
};


    

