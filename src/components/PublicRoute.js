import { Navigate } from 'react-router';
import { selectAuthorized } from '../store/profile/selectors';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ children }) => {
    const authorized = useSelector(selectAuthorized);
    return !authorized ? children : <Navigate to='/chats' replace />
}