import React, { useState } from 'react'
export const Form = ({ onMessageSend }) => {
    const [value, setValue] = useState([]);
    const [author, setAuthor] = useState('person');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onMessageSend(value, author);
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="Message" type='text' placeholder="Enter message" value={value} onChange={handleChange} />
            <input className="Message-button" type='submit' />
        </form>
    )
}