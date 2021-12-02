import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from './messages/reducer';
import { articlesReducer } from './articles/reducer';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";
import { filmsReducer } from './films/reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const config = {
    key: 'myapp',
    storage,
    blacklist: ['articles', 'films'],
}
const persistedReducer = persistReducer(config, combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    articles: articlesReducer,
    films: filmsReducer
}));


export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

