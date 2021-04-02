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
                <img className='image' src={props.data.avatar} alt=""></img>
                <span className='name'>{props.data.fname} {props.data.name.split('')[0]}. {props.data.mname.split('')[0]}.</span>
                <span className='balance'>Баланс: {Intl.NumberFormat('ru-RU').format(props.data.balance)} </span>
                <p className='last_seen'>{Dater(props.data.lastUpdatedAt)}</p>
            </div>
            <span className='status' onClick={(e) => handleDropdownClick(e, props.data)}>{statusText[props.data.status]}</span> 
            <Dropdown active={dropdownActive} setActive={setDropdownActive}/> 
        </div>   
    )

};