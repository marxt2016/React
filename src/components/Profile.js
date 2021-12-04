import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { toggleCheckbox, changeName, signOut } from '../store/profile/actions';
import { useSelector, useDispatch } from 'react-redux';
import { selectName } from "../store/profile/selectors";
import { logOut, userRef } from "../services/firebase";
import { onValue, set } from "firebase/database";

export const Profile = () => {
    const profileState = useSelector(selectName);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            dispatch(changeName(userData?.name||''));
        });
        return unsubscribe;
    }, [value]);


    const handleChange = () => {
        dispatch(toggleCheckbox);
    };

    const handleChangeInput = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value) {
            set(userRef, {
                name:value,
            })
            //dispatch(changeName(value));
        }
    };

    const handleClick = () => {
        dispatch(signOut());
    };

    const handleLogoutClick = async () => {
        try {
            await logOut();
        } catch (error){
            console.error(error);
         }
        
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
                    onClick={handleLogoutClick}
                >Sign out</Button>
            </div>
        </>
    );
}