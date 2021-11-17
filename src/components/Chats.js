
import '../App.css';
import { Messages } from './Messages.js'
import React, { useState, useEffect, useCallback } from "react";
import { InputForm } from './InputForm';
import { AUTHORS } from './utils';
import { Chatlist } from './Chatlist';
import { Form, Button } from 'react-bootstrap';
//import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import { AddchatForm } from './AddchatForm';

export function Chats({ chatNames, setChatNames, onAddChat, onDeleteChat, messages, setMessages }) {
    let { id } = useParams();
    const handleMessageSend = useCallback((newMessage) => {
        if (newMessage.text.length) {
            setMessages(
                (prevMessages) => ({ ...prevMessages, [id]: [...prevMessages[id], newMessage] })
            )
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
                    <Chatlist
                        chatNames={chatNames}
                        onDeleteChat={onDeleteChat}
                        onChange={setChatNames}
                        onAddChat={onAddChat}
                    />
                    <Messages messages={messages[id]} />
                </div>
                <InputForm onMessageSend={handleMessageSend} />
            </main>
        </div>
    );
}


