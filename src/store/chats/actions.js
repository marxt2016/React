import { onValue, set } from "firebase/database";
import { chatsRef, getChatRefById, getMessagesRefById } from "../../services/firebase";

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const SET_CHAT = 'CHATS::SET_CHAT';

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat,
});

export const addChatFB = (newChat) => (dispatch) => {
    set(getChatRefById(newChat.id), newChat);
    set(getMessagesRefById(newChat.id), {empty:true});
};

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: id,
});

export const setChats = (chats) => ({
    type: SET_CHAT,
    payload: chats,
});

export const initChatsTracking = () => (dispatch) => {
    onValue(chatsRef, (chatsSnapshot) => {
        const newChats = [];
        chatsSnapshot.forEach((snap) => {
            newChats.push(snap.val());
        });
        dispatch(setChats(newChats));
    });
};


