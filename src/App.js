import React from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { Chats } from './components/Chats';
import { Profile } from './components/Profile';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Chatlist } from './components/Chatlist';
import { Provider } from 'react-redux';
import { store } from './store/index';


export const App = () => {

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

            <Route path=":id" element={<Chats />} />

            <Route index element={<Chatlist />} />
            <Route element={<Home />} />
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
