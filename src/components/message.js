import React from 'react';
export const Message = ({ message, onButtonClick }) => {
    //const message = props.message;
    //const { message } = props;
    return (
        <div>
            <h3 className="Message">{message}</h3>
            <button className="Message-button" onClick={onButtonClick}>Click me</button>
        </div>

    )
}