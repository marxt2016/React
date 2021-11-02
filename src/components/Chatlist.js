import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export const Chatlist = ({ chatNames }) => {
    return (
        <ListGroup className='mt-2 mb-2' >
            {chatNames.map((chat) => <ListGroup.Item key={chat.id} action variant="primary">{chat.name}</ListGroup.Item>)}
        </ListGroup>
    )
}