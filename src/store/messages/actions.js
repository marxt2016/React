import { AUTHORS } from "../../components/utils";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';

export const addMessage = (id, message) => ({
    type: ADD_MESSAGE,
    payload: { id, message },

});
export const deleteMessage = (chatId, idToDelete) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        idToDelete,
    },
});

let timeout;

export const addMessageWithAutoReply = (id, message) => (dispatch) => {
    dispatch(addMessage(id, message));
    console.log(message);
    if (message.author !== AUTHORS.bot) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            const botMessage = {
                text: 'Hello from bot',
                author: AUTHORS.bot,
                id: `mes-${Date.now()}`
            }
            dispatch(addMessage(id, botMessage));
        }, 1000);
    }
}
