import React, { useState } from 'react';
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
            <nav>
                <a className={isActiveAll ? 'text active' :'text'} href='/' onClick={() => toggleClass(setActiveAll)}>Все
                    <div className={isActiveAll ? "square" : "square_off"}/>
                </a>
            </nav>
            <nav>
                <a className={isActiveBlocked ? 'text active' :'text'} href='/blocked' onClick={() => toggleClass(setActiveBlocked)}>Заблокированные
                    <div className={isActiveBlocked ? "square" : "square_off"}/>     
                </a>
            </nav>
            <nav>
                <a className={isActiveActive ? 'text active' :'text'} href='/active' onClick={() => toggleClass(setActiveActive)}>Активные
                    <div className={isActiveActive ? "square" : "square_off"}/>
                </a>
            </nav>      
        </header>
    )
};


