import React, { useState } from 'react';
import './../ContentBlock/Content.css' 
import Modal from '../Features/Modal.js'
import Dropdown from '../Features/Dropdown.js';
import MyComponent from '../Api/ApiFetcher.js'

export default function ActiveUsersContent() {

    const statusText = {0: 'Приостановлена', 1: 'Подписка активна', 2: 'Заблокирован'}
    const users = MyComponent()
    const [modalActive, setModalActive] = useState(false)
    const [dropdownActive, setDropdownActive] = useState(false)

    const handleDropdownClick = (e, items) => {
        setDropdownActive(items);
        e.stopPropagation();
    }

    const listUsers = users.map((item) => {
        if (item.status === 1)
            return (
                <div key={item.id} className="users" onClick={() => setModalActive(item)}>
                    <div>
                        <img className='image' src={item.avatar} alt=""></img>
                        <span className='name'>{item.fname} {item.name.split('')[0]}. {item.mname.split('')[0]}.</span>
                        <span className='balance'>Баланс: {Intl.NumberFormat('ru-RU').format(item.balance)} </span>
                        <p className='last_seen'>{item.lastUpdatedAt}</p>
                    </div>
                    <span className='status' onClick={(e) => handleDropdownClick(e, item)}>{statusText[item.status]}</span> 
                </div>
        )
    });

    return (
        <div>
            {listUsers}
            <Dropdown active={dropdownActive} setActive={setDropdownActive}/> 
            <Modal active={modalActive} setActive={setModalActive} status={statusText}/>
        </div>
    )
};