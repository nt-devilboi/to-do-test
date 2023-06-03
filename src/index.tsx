import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "mobx-react";
import {TodoStore} from "./Pages/Todo/TodoStore";
import {LocalStorageTodos} from "./Service/LocalStorageTodos";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const storageTodos = new LocalStorageTodos();
const stores = {
    toDoStore: new TodoStore(storageTodos),
};
root.render(

      <Provider {...stores}>
    <App />
      </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
