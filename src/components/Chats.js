
import '../App.css';
import { Messages } from './Messages.js'
import React, { useState, useEffect, useCallback } from "react";
import { InputForm } from './InputForm';
import { AUTHORS } from './utils';
import { Chatlist } from './Chatlist';
import { v4 as uuidv4 } from 'uuid';

export const chatNamesInitial = [
    {
        name: "John",
        id: uuidv4(),
    },
    {
        name: "Mary",
        id: uuidv4(),
    },
    {
        name: "Jane",
        id: uuidv4(),
    },
    {
        name: "Jane111",
        id: uuidv4(),
    },
    {
        name: "Jane11",
        id: uuidv4(),
    },
]


export function Chats() {

    const [messages, setMessages] = useState([]);
    const [chatNames, setChatNames] = useState(chatNamesInitial);

    const handleMessageSend = useCallback((newMessage) => {
        if (newMessage.text.length) {
            setMessages(prevMessages => [...prevMessages, newMessage])
        }
    }, [])

    const handleDelete = (id) => {
        let index = chatNames.indexOf(chatNames.find(el => el.id === id));
        if (index > -1) {
            chatNames.splice(chatNames.indexOf(chatNames.find(el => el.id === id)), 1);
        }
        setChatNames([...chatNames])
    }

    useEffect(() => {
        if (
            messages.length &&
            messages[messages.length - 1].author !== AUTHORS.bot
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

    }, [messages]);


    return (
        <div className="App">
            <main>
                <div className='Chatlist'>
                    <Chatlist chatNames={chatNames} deleteChat={handleDelete} onChange={setChatNames} />
                    <Messages messages={messages} />
                </div>
                <InputForm onMessageSend={handleMessageSend} />
            </main>
        </div>
    );
}


