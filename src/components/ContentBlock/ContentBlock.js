import React, { useState } from 'react';
import './Content.css';
import Modal from './Features/Modal.js';
import User from './User';


export default function ContentBlock(props) {

    const statusText = {0: 'Приостановлена', 1: 'Подписка активна', 2: 'Заблокирован'};
    const [modalActive, setModalActive] = useState(false);

    const listUsers = props.users.map((item) => {
        console.log(item.status)
        if (!props.filter || props.filter === item.status) {
            return (
                <User key={item.id} data={item} handleClick={() => setModalActive(item)} />
        
        )} return(console.log('No status')) // для избегания ошибки Array.prototype.map() expects a value to be returned at the end of arrow function
    });
    
    return (
        <div>
            {listUsers}
            <Modal active={modalActive} setActive={setModalActive} status={statusText}/>
        </div>
    )
};