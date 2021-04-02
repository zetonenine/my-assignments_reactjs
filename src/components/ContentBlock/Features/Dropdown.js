import React from 'react';
import './Dropdown.css';
import DropdownContent from './DropdownContent.js';


const Dropdown = ({active, setActive}) => {
    return (
        <div className={active ? 'drop active' : 'drop'} onClick={() => setActive(false)}>
            
            <div className='drop_content' >
                <DropdownContent user={active} />
            </div>
        </div>    
    );
};

export default Dropdown;
