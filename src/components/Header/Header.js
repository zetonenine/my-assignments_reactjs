import React from 'react';
import './Header.css';

export default function Header() {
    return (
        
        <header className='titles'>
            
            <nav>
                <a className='text' href='/'>Все
                    <div className="square"/>
                    
                </a>
            </nav>
            <nav>
                <a className='text' href='/blocked'>Заблокированные
                    <div className="square"/>
                    
                </a>
            </nav>
            <nav>
                <a className='text' href='/active'>Активные
                    <div className="square"/>
                </a>
            </nav>
            
             
        </header>
    )
};


