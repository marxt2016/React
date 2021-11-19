import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";
import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";

const messagesInitial = {};
export const messagesReducer = (state = messagesInitial, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [payload.id]: [...state[payload.id], payload.message],
            };
        case DELETE_MESSAGE: {
            const newMessages = { ...state };
            newMessages[payload.chatId] = newMessages[payload.chatId].filter(
                ({ id }) => id !== payload.idToDelete
            );

            return newMessages;
        }
        case ADD_CHAT:
            return {
                ...state,
                [payload.id]: [],
            };

        case DELETE_CHAT: {
            const messages = { ...state };
            delete messages[payload]
            return messages;
        }
        default:
            return state;
    }
}
