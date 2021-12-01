
import React, { Fragment, useEffect, useState } from "react";
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { selectChats } from "../store/chats/selector";
import { AddchatForm } from './AddchatForm';
import { useSelector } from "react-redux";
import { deleteChat } from '../store/chats/actions';
import { useDispatch } from 'react-redux';
import { onValue, set } from "firebase/database";
import { chatsRef, getChatRefById, getMessagesRefById } from "../services/firebase";
import { addChat } from '../store/chats/actions';


export const Chatlist = () => {
    const [chats, setChats] = useState([]);
    const chatNames = useSelector(selectChats);
    const dispatch = useDispatch();
    const handleDelete = (event) => {
        dispatch(deleteChat(event.target.id));
    };

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const newId = `chat-${Date.now()}`;
        //dispatch(addChat({ name: value, id: newId }));
        set(getChatRefById(newId), { name: value, id: newId });
        set(getMessagesRefById(newId), {empty:true});
        setValue('');
    };

    useEffect(() => {
        onValue(chatsRef, (chatsSnapshot) => {
            const newChats = [];
            chatsSnapshot.forEach((snap) => {
                newChats.push(snap.val());
            });
            setChats(newChats);
        });
    }, []);

    return (
        <>
            <ListGroup className='mt-2 mb-2 App' >
                {chats.map((chat) => {
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
                <AddchatForm handleSubmit={handleSubmit} handleChange={handleChange} value={value} />
            </ListGroup>

        </>
    )
}