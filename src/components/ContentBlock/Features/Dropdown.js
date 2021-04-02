import React from 'react';
import './Dropdown.css';
import DropdownContent from './DropdownContent.js';

export default function Dropdown(props) {
   
    return (
        <div className={props.active ? 'drop active' : 'drop'} onClick={() => props.setActive(false)}>
            <div className='drop_content' >
                <DropdownContent user={props.active} setActive={props.setActive}/>
            </div>
        </div>    
    );
}


