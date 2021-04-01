import React from 'react';
import './Dropdown.css'
import DropdownContent from './DropdownContent.js'


const Dropdown = ({active, setActive}) => {

    return (
        <div className={active ? 'drop_on' : 'drop_off'}  onClick={() => setActive(false)}>
            <DropdownContent active={active} onClick={() => setActive(false)}/>
        </div>
        
    );
};

export default Dropdown;
