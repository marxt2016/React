import React from "react";
const createMessage = (message, id) => {
    const { text } = message;
    return (
        <div key={id}>{text}</div>
    )
}

export const Messages = ({ messages }) => {
    return (
        <ul>
            {messages.map((message, id) => createMessage(message, id))}
        </ul>
    )
}