import { Form, Button } from 'react-bootstrap';
import React, { useState } from "react";
import { addChat } from '../store/chats/actions';
import { useDispatch } from 'react-redux';

export const AddchatForm = ({ handleChange, handleSubmit, value, setValue }) => {
    
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
