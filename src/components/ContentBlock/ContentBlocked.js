import React, { useState }from 'react';
import './../ContentBlock/Content.css'
import Modal from './Features/Modal.js'
import Dropdown from './Features/Dropdown.js';
import MyComponent from './Api/ApiFetcher.js'
// import Alert from './Features/Alert.js'


export default function BlockedUsersContent() {
    const statusText = {0: 'Приостановлена', 1: 'Подписка активна', 2: 'Заблокирован'}
    const users = MyComponent()

    const [modalActive, setModalActive] = useState(false)
    const [dropdownActive, setDropdownActive] = useState(false)

    const listUsers = users.map((items) => {
        if (items.status === 2)
        return (
            <div key={items.id} className="users" onClick={() => setModalActive(items)}>
                <div>
                    <img className='image' src={items.avatar} alt=""></img>
                    <span className='name'>{items.fname} {items.name.split('')[0]}. {items.mname.split('')[0]}.</span>
                    <span className='balance'>Баланс: {Intl.NumberFormat('ru-RU').format(items.balance)} </span>
                    <p className='last_seen'>{items.lastUpdatedAt}</p>
                </div>
                <span className='status' onClick={() => setDropdownActive(items)}>{statusText[items.status]}</span> 
            </div>
        )
        
    });

    return (
        <div>
            {listUsers}
            <Dropdown active={dropdownActive} setActive={setDropdownActive}/> 
            <Modal active={modalActive} setActive={setModalActive} status={statusText}/>
            {/* <Alert/> */}
        </div>
    )
    
};