import React from 'react';
import DropdownContent from './DropdownContent.js';
import '../../Stylistics.css';

export default function Dropdown(props) {
    
    const handleClick = (e) => {
       e.stopPropagation();
       props.setActive(false)
    };

    return (
        <>
           <div className={props.active ? 'drop active' : 'drop'}>
               <div className='drop_content'>
                   <DropdownContent user={props.active} setActive={props.setActive}/>
               </div>
           </div>
           <div className={props.active ? 'drop_background active' : 'drop_background'} onClick={(e) => handleClick(e)}></div>
       </>
    );
};


