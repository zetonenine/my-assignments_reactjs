import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';

export default function Header() {

    const [isActiveAll, setActiveAll] = useState(false);
    const [isActiveBlocked, setActiveBlocked] = useState(false);
    const [isActiveActive, setActiveActive] = useState(false);
    
    const toggleClass = (state) => {
        state(true);
    };

    return (
        <Router>
            
                
            
                <Link to="/">
                    Все
                        {/* <div className={isActiveAll ? "square" : "square_off"}/> */}
                    
                </Link>
                <Link to='/blocked'>
                    <a className={isActiveBlocked ? 'text active' :'text'} onClick={() => toggleClass(setActiveBlocked)}>Заблокированные
                        <div className={isActiveBlocked ? "square" : "square_off"}/>    
                    </a>
                </Link>
                <Link to='/active'>
                    <a className={isActiveActive ? 'text active' :'text'} onClick={() => toggleClass(setActiveActive)}>Активные
                        <div className={isActiveActive ? "square" : "square_off"}/>
                    </a>

                </Link>  
           
        </Router>    
            
    )
};


