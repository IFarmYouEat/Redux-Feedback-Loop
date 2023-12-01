import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

const objectOfFeedback = (state = [], action) => {
    switch(action.type) {
        case 'ADD_FEELING':
            console.log('Feeling added', action.payload)
            return action.payload;
        case 'CLEAR_OBJECTOFFEEDBACK':
            return state = [];
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        objectOfFeedback
    }),
    applyMiddleware(logger),
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
