import React, { useState } from 'react';
import Dropdown from './Features/Dropdown.js';
import Dater from './Features/Dater'

export default function User(props) {

    const statusText = {0: 'Приостановлена', 1: 'Подписка активна', 2: 'Заблокирован'};
    const [dropdownActive, setDropdownActive] = useState(false);

    const handleDropdownClick = (e, item) => {
        setDropdownActive(item);
        e.stopPropagation();
    }

    return (
        <div key={props.data.id} className="users" onClick={() => props.handleClick(props.data)}> 
            <div>
                <div >
                    <div class="circular__landscape">
                        <img className='image' src={props.data.avatar} alt=""></img>
                    </div>
                    
                    <span className='name'>{props.data.fname} {props.data.name.split('')[0]}. {props.data.mname.split('')[0]}.</span>
                    <span className='balance'>Баланс: {Number(props.data.balance.toFixed(1)).toLocaleString('ru-RU').replace(',', '.')} </span>
                </div> 
                
                <p className='last_seen'>{Dater(props.data.lastUpdatedAt)}</p>
            </div>
            <div className='status' onClick={(e) => handleDropdownClick(e, props.data)}>
               {statusText[props.data.status]}
               <Dropdown active={dropdownActive} setActive={setDropdownActive}/>
           </div> 
        </div>   
    )
};
