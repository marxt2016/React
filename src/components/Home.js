import Button from 'react-bootstrap/Button';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../store/profile/actions';

export const Home = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.profile.name);

    const handleClick = () => {
        dispatch(signIn());
    }

    return (
        <>
            <div className="App">
                <h2>Homepage {name}</h2>
                <Button
                    variant="primary"
                    type="submit"
                    value="Signin"
                    className="reload"
                    onClick={handleClick}
                >Sign in</Button>
            </div>
        </>
    )
}