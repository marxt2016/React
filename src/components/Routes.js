import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from "react";
import { Home } from '../components/Home';
import { Chats } from '../components/Chats';
import { Profile } from '../components/Profile';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Chatlist } from '../components/Chatlist';
import { Articles } from '../components/Articles';
import { Films } from './Films';
import { PublicRoute } from '../components/PublicRoute';
import { PrivateRoute } from '../components/PrivateRoute';

export const Router = () => (
    <BrowserRouter>
        <Navbar bg="light" variant="dark">
            <Container>
                <Nav className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}>
                    <Link to="/" >Home</Link>
                    <Link to="/chats" >Chats</Link>
                    <Link to="/profile" >Profile</Link>
                    <Link to="/articles" >Articles</Link>
                    <Link to="/films" >Films</Link>
                </Nav>
            </Container>
        </Navbar>

        <Routes>
            <Route path="/" element={
                <PublicRoute>
                    <Home />
                </PublicRoute>
            } />
            <Route path="profile" element={
                <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            } />
            <Route path="chats" >
                <Route path=":id" element={<PrivateRoute><Chats /></PrivateRoute>} />
                <Route index element={<PrivateRoute><Chatlist /></PrivateRoute>} />
                <Route element={<PublicRoute><Home /></PublicRoute>} />
                <Route path="*" element={<h3>404</h3>} />
            </Route>
            <Route path="articles" element={<Articles />} />
            <Route path="films" element={<Films />} />
        </Routes>
    </BrowserRouter >
)