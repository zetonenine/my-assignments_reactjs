import React from 'react';
import './Header.css';

export default function Header() {
    return (
        
        <header className='titles'>
            
            <div>
                <div className='text' href='/'>Все
                    <div className="square"/>
                    
                </div>
            </div>
            <div>
                <a className='text' onClick='/blocked'>Заблокированные
                    <div className="square"/>
                    
                </a>
            </div>
            <div>
                <p className='text' href='/active'>Активные
                    <div className="square"/>
                </p>
            </div>
            
             
        </header>
    )
};


            // <nav className='nav'>

            //     <a className='a' href='/'>Все</a>
            //         <div className="square"/>
                    
            //     <a className='a' href='/blocked'>Заблокированные</a>
            //         <div className="square"/>
                
            //     <a className='a' href='/active'>Активные</a>
            //         <div className="square"/>
                
            // </nav>

