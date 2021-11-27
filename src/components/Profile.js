import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { toggleCheckbox, changeName, signOut } from '../store/profile/actions';
import { useSelector, useDispatch } from 'react-redux';
import { selectName } from "../store/profile/selectors";

export const Profile = () => {
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

    const handleClick = () => {
        dispatch(signOut());
    };


    return (
        <>
            <div className="App">
                <h2 >Profile</h2>
                <Form.Group className="mt-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label={profileState.name}
                        checked={profileState.checkbox}
                        onChange={handleChange} />
                </Form.Group>
                <Form onSubmit={handleSubmit} className="Chatlist">
                    <Form.Control
                        className='me-3'
                        type='text'
                        placeholder="Enter name"
                        value={value} onChange={handleChangeInput} />
                    <Button variant="primary" type="submit" value="Change">Change</Button>
                </Form>

                <Button
                    variant="primary"
                    type="submit"
                    value="Signout"
                    className="mt-2 reload"
                    onClick={handleClick}
                >Sign out</Button>
            </div>
        </>
    );
}