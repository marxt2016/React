
import React from "react";
import { Router } from "./components/Routes";
import { Provider } from 'react-redux';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/index'


export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <Router />
      </PersistGate>
    </Provider>
  )
}
