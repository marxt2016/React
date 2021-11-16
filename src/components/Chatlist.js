
import React, { Fragment } from "react";
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { chatNamesInitial } from './Chats';

export const Chatlist = ({ chatNames = chatNamesInitial, deleteChat }) => {

    return (
        <ListGroup className='mt-2 mb-2 App' >
            {chatNames.map((chat) => {

                return (<Fragment key={chat.id}>
                    <ListGroup.Item action variant="primary" >
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? "red" : "#084298" })}
                            to={`/chats/${chat.id}`} >{chat.name}
                        </NavLink>
                        <a onClick={deleteChat} id={chat.id} >&times;</a>
                    </ListGroup.Item>

                </Fragment>)
            }

            )}
        </ListGroup>
    )
}