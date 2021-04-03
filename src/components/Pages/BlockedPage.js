import React from 'react';
import ContentBlock from '../ContentBlock/ContentBlock.js';

export default function Blocked(props) {
    console.log(props.users.status)
    return(
        
        <ContentBlock users={props.users} filter={2}/>
    )
} 
    
    
    
    