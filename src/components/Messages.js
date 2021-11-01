import React from "react";
const createMessage = (message, id) => {
    const { text, author } = message;

    let classname = 'Messages-content';
    if (author === 'person') {
        console.log('IF person');
        classname += ' person';
    }
    return (
        <div key={id} className={`${classname}`}>
            < div className="text" > {text}</div >
        </div >

    )
}

export const Messages = ({ messages }) => {
    return (
        <ul className='Messages-list' >
            {messages.map((message, id) => createMessage(message, id))}
        </ul>
    )
}