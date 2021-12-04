import { useState } from "react";
import { Form, Button } from 'react-bootstrap';

export const SignForm = ({ onSubmit, error, loading }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <Form onSubmit={handleSubmit} className='App mt-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleChangeEmail} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={handleChangePassword} />
                </Form.Group>
                <Button variant="primary" type="submit" className="reload" disabled={loading}>
                    Submit
                </Button>
            </Form>
            {error && <h4 className='App mt-2'>{ error}</h4>}
        </>
    );

}