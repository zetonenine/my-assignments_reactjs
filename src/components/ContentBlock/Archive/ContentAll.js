import React, { useState } from 'react';
import './Content.css'
import Modal from '../Features/Modal.js'
import Dropdown from '../Features/Dropdown.js';
import MyComponent from '../Api/ApiFetcher.js'
import User from '../User'


export default function AllUsersContent() {

    const statusText = {0: 'Приостановлена', 1: 'Подписка активна', 2: 'Заблокирован'}
    const users = MyComponent()
    const [modalActive, setModalActive] = useState(false)
    const [dropdownActive, setDropdownActive] = useState(false)



    const listUsers = users.map((item) => {
        return (
            <User data={item} handleClick={() => setModalActive(item)} />
        )
    })

    return (
        <div>
            {listUsers}
            <Dropdown active={dropdownActive} setActive={setDropdownActive}/> 
            <Modal active={modalActive} setActive={setModalActive} status={statusText}/>
        </div> 
    )
}
