import { store } from '../store/index';
import Form from 'react-bootstrap/Form';
import { toggleCheckbox } from '../store/profile/actions';
import { useSelector, useDispatch } from 'react-redux';

export const Profile = () => {
    //const state = store.getState();
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleCheckbox);
    };
    return (
        <>
            <h2 className="App">Profile</h2>
            <Form.Group className="App mt-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label={state.name}
                    checked={state.checkbox}
                    onChange={handleChange} />
            </Form.Group>
        </>
    );
}