import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
// import { syncHistoryWithStore, routeMiddleWare } from 'react-router-redux';
import { reducers } from './reducers/index';
import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

// build the users list
const users = [];
for(let i=0;i<50;i++){
    users.push({
        id: i,
        posted_date: 2000+i,
        description: 'description' + i,
        transaction_amount:{
        amount:i
        }
    });
}

const initial_state = {
    users: users,
}

//create the store
// let middleware = applyMiddleware(routeMiddleWare(browserHistory))
const store = createStore(reducers, initial_state);
// const history = syncHistoryWithStore

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
