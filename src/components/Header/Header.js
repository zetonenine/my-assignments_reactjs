import React from 'react';
import './Header.css';

export default function Header() {
    return (
        
        <header className='border'>
            <nav>
                <a href='/'>Все</a>
                <a href='/blocked'>Заблокированные</a>
                <a href='/active'>Активные</a>
            </nav> 
        </header>
    )
};

