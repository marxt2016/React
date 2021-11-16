import React from "react";

import { Navigate } from 'react-router-dom';
const createMessage = (message) => {
    const { text, author, id } = message;

    return (
        <div key={id} className={`Messages-content${author === 'person' ? ' person' : ''}`}>
            < div className="text" ><span>{author}</span>:<span> {text}</span></div >
        </div >
    )
}

export const Messages = ({ messages }) => {
    if (!messages) {
        return <Navigate replace to="/chats" />
    }
    return (
        <ul className='Messages-list' >
            {messages.map(message => createMessage(message))}
        </ul>
    )
}