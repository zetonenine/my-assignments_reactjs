import React from 'react';
import ContentBlock from '../ContentBlock/ContentBlock.js';

export default function Active(props) {
    return(
        <ContentBlock users={props.users} filter={1}/>
    )
}
