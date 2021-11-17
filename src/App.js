import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from "react";
import { Home } from './components/Home';
import { Chats } from './components/Chats';
import { Profile } from './components/Profile';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Chatlist } from './components/Chatlist';
import { Provider } from 'react-redux';
import { store } from './store/index';

const chatNamesInitial = [
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
export const App = () => {
  const [chatNames, setChatNames] = useState(chatNamesInitial);
  const [messages, setMessages] = useState(messagesInitial);

  const handleAddChat = useCallback((chatName) => {
    if (chatName) {
      const newId = `chat-${Date.now()}`;
      setChatNames(prevChatNames => {
        return [...prevChatNames, { name: chatName, id: newId }];

      });

      setMessages(prevMessages => ({
        ...prevMessages,
        [newId]: [],
      })
      )
    }
  });

  const handleDelete = useCallback((element) => {
    let index = chatNames.indexOf(chatNames.find(el => el.id === element.target.id));
    if (index > -1) {
      chatNames.splice(chatNames.indexOf(chatNames.find(el => el.id === element.target.id)), 1);
    }
    setChatNames([...chatNames]);
    setMessages(prevMessages => {
      const newMessages = { ...prevMessages };
      delete newMessages[element.target.id];
      return newMessages
    })
  }, [chatNames]);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar bg="light" variant="dark">
          <Container>
            <Nav className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}>

              <Link to="/" >Home</Link>

              <Link to="/chats" >Chats</Link>
              <Link to="/profile" >Profile</Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats" >

            <Route path=":id" element={<Chats
              chatNames={chatNames}
              messages={messages}
              setMessages={setMessages}
              onAddChat={handleAddChat}
              onDeleteChat={handleDelete} />} />

            <Route index element={<Chatlist
              onAddChat={handleAddChat}
              onDeleteChat={handleDelete}
              chatNames={chatNames} />} />
            <Route element={<Home />} />
            <Route path="*" element={<h3>404</h3>} />
          </Route>
        </Routes>
      </BrowserRouter >
    </Provider>
  )
}


























// import './App.css';
// import { Messages } from './components/Messages.js'
// import React, { useState, useEffect, useCallback } from "react";
// import { InputForm } from './components/InputForm';
// import { AUTHORS } from './components/utils';
// import { Chatlist } from './components/Chatlist';
// import { v4 as uuidv4 } from 'uuid';

// const chatNames = [
//   {
//     name: "John",
//     id: uuidv4(),
//   },
//   {
//     name: "Mary",
//     id: uuidv4(),
//   },
//   {
//     name: "Jane",
//     id: uuidv4(),
//   },
// ]

// function App() {
//   const [messages, setMessages] = useState([]);

//   const handleMessageSend = useCallback((newMessage) => {
//     if (newMessage.text.length) {
//       setMessages(prevMessages => [...prevMessages, newMessage])
//     }
//   }, [])

//   useEffect(() => {
//     if (
//       messages.length &&
//       messages[messages.length - 1].author !== AUTHORS.bot
//     ) {
//       const timer = setTimeout(
//         () =>
//           handleMessageSend({
//             text: 'Hello from bot',
//             author: AUTHORS.bot,
//             id: `mes-${Date.now()}`
//           }), 1000);
//       return () => clearTimeout(timer);
//     }

//   }, [messages]);

//   return (
//     <div className="App">
//       <header>
//         <h1>Lesson3 Chat App</h1>
//       </header>
//       <main>
//         <div className='Chatlist'>
//           <Chatlist chatNames={chatNames} />
//           <Messages messages={messages} />
//         </div>
//         <InputForm onMessageSend={handleMessageSend} />
//       </main>
//     </div>
//   );
// }

// export default App;
