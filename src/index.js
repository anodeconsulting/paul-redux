import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { reducers } from './reducers/index';
import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// build the users list
const users = [];
for(let i=0;i<50;i++){
    users.push({
        id: i,
        posted_date: '201'+i,
        description: 'description' + i,
        transaction_amount:{
        amount:i
        }
    });
}

const initial_state = {
    users: users,
}
const store = createStore(reducers, initial_state);


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
