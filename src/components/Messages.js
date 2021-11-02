import React from "react";
const createMessage = (message) => {
    const { text, author, id } = message;
    let classname = 'Messages-content';
    if (author === 'person') {
        classname += ' person';
    }
    return (
        <div key={id} className={classname}>
            < div className="text" ><span>{author}</span>:<span> {text}</span></div >
        </div >
    )
}

export const Messages = ({ messages }) => {
    return (
        <ul className='Messages-list' >
            {messages.map(createMessage)}
        </ul>
    )
}