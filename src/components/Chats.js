
import '../App.css';
import { Messages } from './Messages.js'
import React, { useState, useEffect, useCallback } from "react";
import { InputForm } from './InputForm';
import { AUTHORS } from './utils';
import { Chatlist } from './Chatlist';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';

export const chatNamesInitial = [
    {
        name: "John",
        id: "john",
    },
    {
        name: "Mary",
        id: "mary",
    },
    {
        name: "Jane",
        id: "jane",
    },

]

const messagesInitial = {
    john: [
        {
            text: 'Message from John',
            author: 'person',
            id: 'john'
        }
    ],
    mary: [
        {
            text: 'Message from Mary',
            author: 'person',
            id: 'mary'
        }
    ],
    jane: [

    ],

}

export function Chats() {
    let { id } = useParams();
    const [messages, setMessages] = useState(messagesInitial);
    const [chatNames, setChatNames] = useState(chatNamesInitial);
    const handleMessageSend = useCallback((newMessage) => {
        if (newMessage.text.length) {
            setMessages(
                (prevMessages) => ({ ...prevMessages, [id]: [...prevMessages[id], newMessage] })
            )
        }
    }, [id])

    const handleDelete = (element) => {
        let index = chatNames.indexOf(chatNames.find(el => el.id === element.target.id));
        if (index > -1) {
            chatNames.splice(chatNames.indexOf(chatNames.find(el => el.id === element.target.id)), 1);
        }
        setChatNames([...chatNames]);
    }

    useEffect(() => {

        if (
            messages[id].length &&
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


    return (
        <div className="App">
            <main>
                <div className='Chatlist'>
                    <Chatlist chatNames={chatNames} deleteChat={handleDelete} onChange={setChatNames} />
                    <Messages messages={messages[id]} />
                </div>
                <InputForm onMessageSend={handleMessageSend} />
            </main>
        </div>
    );
}


