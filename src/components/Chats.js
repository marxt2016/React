
import '../App.css';
import { Messages } from './Messages.js'
import React, { useEffect, useCallback, useMemo } from "react";
import { InputForm } from './InputForm';
import { AUTHORS } from './utils';
import { Chatlist } from './Chatlist';
//import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import { addMessage } from "../store/messages/actions";
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
            dispatch(addMessage(id, newMessage));
        }
    }, [id]);

    useEffect(() => {
        if (
            messages[id]?.length &&
            messages[id][messages[id].length - 1].author !== AUTHORS.bot
        ) {
            const timer = setTimeout(
                () =>
                    handleMessageSend({
                        text: 'Hello from bot',
                        author: AUTHORS.bot,
                        id: `mes-${Date.now()}`
                    }), 1000);
            return () => clearTimeout(timer);
        }

    });

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


