import React from 'react';
import './Dropdown.css'

export default function DropdownContent(props) {

    const handleClick = (e, newStatus, item, setActive) => {
        e.stopPropagation();
        item.status = newStatus;
        setActive(false)
    }

    return (
        <div>
            <div>
                <span className={props.user.status === 0 ? '' :'not_chosen_text'} onClick={(e) => handleClick(e, 0, props.user, props.setActive)}>   Приостановлена<br/></span>
                <span className={props.user.status === 1 ? '' :'not_chosen_text'} onClick={(e) => handleClick(e, 1, props.user, props.setActive)}>   Подписка активна<br/></span>
                <span className={props.user.status === 2 ? '' :'not_chosen_text'} onClick={(e) => handleClick(e, 2, props.user, props.setActive)}>   Заблокирован</span>
            </div> 
        </div>
    );
};
