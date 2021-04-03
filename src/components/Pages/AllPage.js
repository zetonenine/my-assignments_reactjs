import React from 'react';
import ContentBlock from '../ContentBlock/ContentBlock.js';

export default function All(props) {
    console.log(props.users.id)
    return(
        
        <ContentBlock users={props.users}/>
    )
}