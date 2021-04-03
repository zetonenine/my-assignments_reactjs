import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {

    return (
        <header className='titles'>
                
            
                <NavLink exact to="/" className="text">
                    Все
                    <div className="square"/>
                    
                </NavLink>
                <NavLink exact to='/blocked' className='text'>
                    Заблокированные
                    <div className="square"/>
                    
                </NavLink>
                <NavLink exact to='/active'  className='text'>
                    Активные
                    <div className="square"/>
                    
                </NavLink>  
        </header>
            
    )
};


