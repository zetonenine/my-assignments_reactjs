import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {

    const [isActiveAll, setActiveAll] = useState(false);
    const [isActiveBlocked, setActiveBlocked] = useState(false);
    const [isActiveActive, setActiveActive] = useState(false);
    
    const toggleClass = (state) => {
        state(true);
    };

    return (
        <header className='titles'>
                
            
                <NavLink exact to="/" className="text" onClick={() => toggleClass(setActiveAll)}>
                    Все
                    <div className={isActiveAll ? "square" : "square_off"}/>
                    
                </NavLink>
                <NavLink exact to='/blocked' className='text' onClick={() => toggleClass(setActiveBlocked)}>
                    Заблокированные
                    <div className={isActiveBlocked ? "square" : "square_off"}/>    
                    
                </NavLink>
                <NavLink exact to='/active'  className='text' onClick={() => toggleClass(setActiveActive)} >
                    Активные
                    <div className={isActiveActive ? "square" : "square_off"}/>
                    
                </NavLink>  
        </header>
            
    )
};


