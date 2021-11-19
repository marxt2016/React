import { ADD_MESSAGE } from "./actions";
import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";

const messagesInitial = {};
export const messagesReducer = (state = messagesInitial, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [payload.id]: [...state[payload.id], payload.message],
            };
        case ADD_CHAT:
            return {
                ...state,
                [payload.id]: [],
            };

        case DELETE_CHAT: {
            const messages = { ...state };
            delete messages[payload.id]
            return messages;
        }
        default:
            return state;
    }
}
