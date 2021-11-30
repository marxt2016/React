import { Link } from "react-router-dom";
import { signUp } from "../services/firebase";
import { SignForm } from "./SignForm";
import React, { useState } from "react";

export const SignUp = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSignUp = async (email, password) => {
        setLoading(true);
        try {
            await signUp(email, password);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally{
            setLoading(false);
        }
    }

    return (
        <>
            <h2 className="App">Registration</h2>
            <SignForm onSubmit={handleSignUp} error={error} loading={ loading} className="App"/>
            <Link className='App linkNav' to='/'>Return Home</Link>
        </>
    )
}