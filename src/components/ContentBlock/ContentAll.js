import React, { useState }from 'react';
import './Content.css'
import Modal from './Features/Modal.js'
import Dropdown from './Features/Dropdown.js';
import MyComponent from './Api/ApiFetcher.js'


export default function AllUsersContent() {

    const statusText = {0: 'Приостановлена', 1: 'Подписка активна', 2: 'Заблокирован'}
    const users = MyComponent()
    
    
    const [modalActive, setModalActive] = useState(false)
    const [dropdownActive, setDropdownActive] = useState(false)

    const date = new Date()
    console.log(date.getDay())

    const listUsers = users.map((items) => {
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
    })

    return (
        <div>
            {listUsers}
            <Dropdown active={dropdownActive} setActive={setDropdownActive}/> 
            
            <Modal active={modalActive} setActive={setModalActive} status={statusText}/>
            


            
        </div> 
    )
}





 // const users = [
    //     {
    //         id: 1,
    //         name: 'Пётр',
    //         fname: 'Иванов',
    //         mname: 'Петрович',
    //         status: (status[1]),
    //         lastUpdatedAt: '10 minutes',
    //         avatar: 'PHOTO',
    //         balance: 307304.6927124143
    //     },
    //     {
    //         id: 2,
    //         name: 'Пётр',
    //         fname: 'Иванов',
    //         mname: 'Петрович',
    //         status: (status[1]),
    //         lastUpdatedAt: '10 minutes',
    //         avatar: 'PHOTO',
    //         balance: 307304.6927124143
    //     },
    //     {
    //         id: 3,
    //         name: 'Пётр',
    //         fname: 'Иванов',
    //         mname: 'Петрович',
    //         status: (status[1]),
    //         lastUpdatedAt: '10 minutes',
    //         avatar: 'PHOTO',
    //         balance: 307304.6927124143
    //     },
    // ]