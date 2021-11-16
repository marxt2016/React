
import '../App.css';
import { Messages } from './Messages.js'
import React, { useState, useEffect, useCallback } from "react";
import { InputForm } from './InputForm';
import { AUTHORS } from './utils';
import { Chatlist } from './Chatlist';
import { Form, Button } from 'react-bootstrap';
//import { v4 as uuidv4 } from 'uuid';
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
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddChat(event.target[0].value);
        setValue('');
    }

    const handleMessageSend = useCallback((newMessage) => {
        if (newMessage.text.length) {
            setMessages(
                (prevMessages) => ({ ...prevMessages, [id]: [...prevMessages[id], newMessage] })
            )
        }
    }, [id]);

    const handleDelete = useCallback((element) => {
        let index = chatNames.indexOf(chatNames.find(el => el.id === element.target.id));
        if (index > -1) {
            chatNames.splice(chatNames.indexOf(chatNames.find(el => el.id === element.target.id)), 1);
        }
        setChatNames([...chatNames]);
        setMessages(prevMessages => {
            const newMessages = { ...prevMessages };
            delete newMessages[element.target.id];
            console.log(!newMessages[element.target.id]);

            return newMessages
        })
    }, []);

    const handleAddChat = useCallback((chatName) => {
        const newId = `chat-${Date.now()}`;
        setChatNames(prevChatNames => [...prevChatNames, { name: chatName, id: newId }]);
        setMessages(prevMessages => ({
            ...prevMessages,
            [newId]: [],
        })
        )

    }, [])

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

    return (
        <div className="App">
            <main>
                <div className='Chatlist'>
                    <Chatlist
                        chatNames={chatNames}
                        deleteChat={handleDelete}
                        onChange={setChatNames}
                    />
                    <Messages messages={messages[id]} />
                </div>
                <InputForm onMessageSend={handleMessageSend} />
                <Form className='mt-2' onSubmit={handleSubmit} >
                    <Form.Group className="me-3"  >
                        <Form.Control
                            type="text"
                            placeholder="Enter chat name"
                            value={value}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </main>
        </div>
    );
}


