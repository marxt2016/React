import {
    REQUEST_FILMS_FAILURE,
    REQUEST_FILMS_LOADING,
    REQUEST_FILMS_SUCCESS,
} from "./actions";

const initialState = {
    filmsList: [],
    request: {
        status: 3,
        error: "",
    },
};

export const filmsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_FILMS_LOADING:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: 0,
                },
            };
        case REQUEST_FILMS_SUCCESS:
            return {
                ...state,
                filmsList: payload,
                request: {
                    error: "",
                    status: 1,
                },
            };
        case REQUEST_FILMS_FAILURE:
            return {
                ...state,
                request: {
                    error: payload,
                    status: 2,
                },
            };
        default:
            return state;
    }
};