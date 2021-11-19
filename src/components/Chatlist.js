
import React, { Fragment } from "react";
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { selectChats } from "../store/chats/selector";
import { AddchatForm } from './AddchatForm';
import { useSelector } from "react-redux";
import { deleteChat } from '../store/chats/actions';
import { useDispatch } from 'react-redux';


export const Chatlist = () => {
    const chatNames = useSelector(selectChats);
    const dispatch = useDispatch();
    const handleDelete = (event) => {
        dispatch(deleteChat(event.target.id));
    };
    return (
        <>
            <ListGroup className='mt-2 mb-2 App' >
                {chatNames.map((chat) => {
                    return (<Fragment key={chat.id}>
                        <ListGroup.Item action variant="primary" >
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? "red" : "#084298" })}
                                to={`/chats/${chat.id}`} >{chat.name}
                            </NavLink>
                            <a onClick={handleDelete} id={chat.id} >&times;</a>
                        </ListGroup.Item>
                    </Fragment>)
                }
                )}
                <AddchatForm />
            </ListGroup>

        </>
    )
}