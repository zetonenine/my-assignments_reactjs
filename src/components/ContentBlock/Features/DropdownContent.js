import React from 'react';
import './Dropdown.css'

const DropdownContent = ({active}) => {
    console.log(active.status)
    return (
        <div>
            <div>
                <span className={active.status === 0 ? '' :'not_chosen_text'} onClick={() => active.status = 0}>   Приостановлена<br/></span>
                <span className={active.status === 1 ? '' :'not_chosen_text'} onClick={() => active.status = 1}>   Подписка активна<br/></span>
                <span className={active.status === 2 ? '' :'not_chosen_text'} onClick={() => active.status = 2}>   Заблокирован</span>
            </div>
        </div>
    );
};

export default DropdownContent;