import React from 'react';
import './Dropdown.css'

const DropdownContent = ({user}) => {
    console.log(user.status)
    return (
        <div>
            <div>
                <span className={user.status === 0 ? '' :'not_chosen_text'} onClick={() => user.status = 0}>   Приостановлена<br/></span>
                <span className={user.status === 1 ? '' :'not_chosen_text'} onClick={() => user.status = 1}>   Подписка активна<br/></span>
                <span className={user.status === 2 ? '' :'not_chosen_text'} onClick={() => user.status = 2}>   Заблокирован</span>
            </div>
        </div>
    );
};

export default DropdownContent;