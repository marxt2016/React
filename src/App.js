
import './App.css';
import { Messages } from './components/Messages.js'
import React, { useState, useEffect } from "react";
import { Form } from './components/Form';

function App() {
  const [messages, setMessages] = useState([]);
  const handleMessageSend = (text, author) => {
    if (text.length) {
      messages.push({ text, author });
      setMessages([...messages])
    }
  }

  useEffect(() => {
    let timer = 0;
    if (messages.length > 0) {
      if (messages[messages.length - 1].author === 'person') {
        timer = setTimeout(() => handleMessageSend('Hello from bot', 'bot'), 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [messages]);

  return (
    <div className="App">
      <header className="App-header">
        <Messages messages={messages} />
        <Form onMessageSend={handleMessageSend} />
      </header>
    </div>
  );
}

export default App;
