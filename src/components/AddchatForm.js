import { Form, Button } from 'react-bootstrap';
import React, { useState } from "react";

export const AddchatForm = ({ onAddChat }) => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onAddChat(event.target[0].value);
        setValue('');
    }
    return (

        <Form className='mt-2' onSubmit={handleSubmit} >
            <Form.Group className="me-3"  >
                <Form.Control
                    type="text"
                    placeholder="Enter chat name"
                    value={value}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form >
    )
}
