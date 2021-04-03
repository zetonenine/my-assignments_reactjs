import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Stylistics.css';

export default function Header() {

    return (
        <header className='header_titles'>
                <NavLink exact to="/" className="header_text">
                    Все
                    <div className="square"/>
                </NavLink>
                <NavLink exact to='/blocked' className='header_text'>
                    Заблокированные
                    <div className="square"/>
                </NavLink>
                <NavLink exact to='/active'  className='header_text'>
                    Активные
                    <div className="square"/>
                </NavLink>  
        </header>
    )
};


