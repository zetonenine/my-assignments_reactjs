import React from 'react';
import './Dropdown.css';
import DropdownContent from './DropdownContent.js';

export default function Dropdown(props) {
    
    const handleClick = (e) => {
       e.stopPropagation();
       props.setActive(false)
    }

    return (
        <div className={props.active ? 'drop active' : 'drop'} onClick={(e) => handleClick(e)}>
            <div className='drop_content' >
                <DropdownContent user={props.active} setActive={props.setActive}/>
            </div>
        </div>    
    );
}


