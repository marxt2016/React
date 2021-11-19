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
