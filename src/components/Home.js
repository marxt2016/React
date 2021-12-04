import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../services/firebase';
import { signIn } from '../store/profile/actions';
import { SignForm } from './SignForm';
import { Link} from 'react-router-dom';

export const Home = () => {
    //const dispatch = useDispatch();
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // const handleClick = () => {
    //     dispatch(signIn());
    // };

    const handleSignIn = async (email, password) => {
        setLoading(true);
         try {
            await logIn(email, password);
        } catch (error) {
             console.log(error);
             setError(error.message);
        }finally{
             setLoading(false);
        }
    }

    return (
        <>
            <div className="App">
                <h2>Homepage </h2>
                <h3>Log In </h3>
                {/* <Button
                    variant="primary"
                    type="submit"
                    value="Signin"
                    className="reload"
                    onClick={handleClick}
                >Sign in</Button> */}
            
            </div>
            <SignForm onSubmit={handleSignIn} error={error} loading={ loading} />
            <Link  to='signup' className='App linkNav'>Sign Up</Link>
        </>
    )
}