import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Todo from './Todo';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
//Hari ke 8 
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    {/* App.js menjadi Root Navigation */}
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
