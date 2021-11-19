import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from "react";
import { Home } from '../components/Home';
import { Chats } from '../components/Chats';
import { Profile } from '../components/Profile';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Chatlist } from '../components/Chatlist';

export const Router = () => (
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
                <Route path="*" element={<h3>404</h3>} />
            </Route>
        </Routes>
    </BrowserRouter >
)