import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { toggleCheckbox, changeName } from '../store/profile/actions';
import { useSelector, useDispatch } from 'react-redux';
import { selectName } from "../store/profile/selectors";

export const Profile = () => {
    //const state = store.getState();
    const profileState = useSelector(selectName);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleCheckbox);
    };

    const handleChangeInput = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value) {
            dispatch(changeName(value));
        }
    };

    return (
        <>
            <h2 className="App">Profile</h2>
            <Form.Group className="App mt-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label={profileState.name}
                    checked={profileState.checkbox}
                    onChange={handleChange} />
            </Form.Group>
            <Form onSubmit={handleSubmit} className="App Chatlist">
                <Form.Control
                    className='me-3'
                    type='text'
                    placeholder="Enter name"
                    value={value} onChange={handleChangeInput} />
                <Button variant="primary" type="submit" value="Change">Change</Button>
            </Form>
        </>
    );
}