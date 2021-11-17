import React, { useState, useRef } from 'react'
import { AUTHORS } from './utils';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const InputForm = ({ onMessageSend }) => {
    const messageInputRef = useRef();
    const [value, setValue] = useState([]);
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onMessageSend({
            text: value,
            author: AUTHORS.person,
            id: `mes-${Date.now()}`
        })
        setValue('');
        messageInputRef.current?.focus();
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control className='me-3' type='text' placeholder="Enter message" ref={messageInputRef} value={value} onChange={handleChange} />
            <Button variant="primary" size="lg" type="submit" value="Send">Send</Button>
        </Form>
    )
}