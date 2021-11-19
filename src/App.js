
import React from "react";
import { Router } from "./components/Routes";
import { Provider } from 'react-redux';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
