
import '../App.css';
import { Messages } from './Messages.js'
import React, { useCallback, } from "react";
import { InputForm } from './InputForm';
import { Chatlist } from './Chatlist';
//import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import { addMessageWithAutoReply } from "../store/messages/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from '../store/messages/selector';

export function Chats() {
    let { id } = useParams();
    const messages = useSelector(selectMessages);

    // const messagesByID = useMemo(() => selectMessagesForChat(id), [id]);
    // const messagesForChat = useSelector(messagesByID);
    // console.log(messagesForChat);

    const dispatch = useDispatch();
    const handleMessageSend = useCallback((newMessage) => {
        if (newMessage.text.length) {
            dispatch(addMessageWithAutoReply(id, newMessage));
        }
    }, [id]);

    if (!messages[id]) {
        return <Navigate replace to="/chats" />;
    }
    return (
        <div className="App">
            <main>
                <div className='Chatlist'>
                    <Chatlist />
                    <Messages messages={messages[id]} />
                </div>
                <InputForm onMessageSend={handleMessageSend} />
            </main>
        </div>
    );
}


