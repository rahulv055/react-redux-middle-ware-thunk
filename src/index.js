import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import reducer from './redux/reducer'
import * as serviceWorker from './serviceWorker';

const middleware = [logger,thunk]
const store = createStore(reducer,applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
