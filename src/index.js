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
import { addLocaleData, IntlProvider } from 'react-intl';
import messages from './components/I18n/messages';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import { flattenMessages } from './components/I18n/Utils';
// import { BrowserHistory } from 'react-router';
// build the users list
var users = {
    id: 'es-ES'
}; 

const initial_state = {
    users: users,
}

// // console.log(users);
// //create the store

const store = createStore(reducers, initial_state);
// store.subscribe(()=>{
//     console.log('store changed', store.getState());
//     // users.id = store.getState().users.id; 
// })

// store.dispatch({
//     type:'changeLanguage'
// })
// let middleware = applyMiddleware(routeMiddleWare(BrowserHistory))
// const history = syncHistoryWithStore

// var locale = 'es-ES';
//     (navigator.languages && navigator.language[0])
//     || navigator.language
//     || navigator.userLanguage
//     || 'en-US';

ReactDOM.render(   
    <Provider store = {store}>
        {/* <IntlProvider locale={users.id} messages={flattenMessages(messages[users.id])}> */}
            <App />
        {/* </IntlProvider> */}
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

