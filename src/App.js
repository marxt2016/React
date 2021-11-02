
import './App.css';
import { Messages } from './components/Messages.js'
import React, { useState, useEffect, useCallback } from "react";
import { InputForm } from './components/InputForm';
import { AUTHORS } from './components/utils';
import { Chatlist } from './components/Chatlist';
import { v4 as uuidv4 } from 'uuid';

const chatNames = [
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
]

function App() {
  const [messages, setMessages] = useState([]);

  const handleMessageSend = useCallback((newMessage) => {
    if (newMessage.text.length) {
      setMessages(prevMessages => [...prevMessages, newMessage])
    }
  }, [])

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
      <header>
        <h1>Lesson3 Chat App</h1>
      </header>
      <main>
        <div className='Chatlist'>
          <Chatlist chatNames={chatNames} />
          <Messages messages={messages} />
        </div>
        <InputForm onMessageSend={handleMessageSend} />
      </main>
    </div>
  );
}

export default App;
