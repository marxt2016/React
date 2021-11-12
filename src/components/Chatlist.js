
import React, { useState, Fragment } from "react";
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export const Chatlist = ({ chatNames, deleteChat }) => {
    console.log(chatNames);
    return (
        <ListGroup className='mt-2 mb-2 App' >
            {chatNames.map((chat) =>
                <Fragment key={chat.id}>
                    <ListGroup.Item action variant="primary" >
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? "red" : "#084298" })}
                            to={`/chats/${chat.id}`} >{chat.name}
                        </NavLink>
                        <a onClick={() => deleteChat(chat.id)}>&times;</a>
                    </ListGroup.Item>

                </Fragment>
            )}
        </ListGroup>
    )
}