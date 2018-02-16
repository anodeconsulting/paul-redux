import React from 'react';
import {BrowserRouter,  Route} from 'react-router-dom';

import Account from '././components/Account/Account';
import Transaction from '././components/Transaction/Transaction';
import Login from '././components/Login/Login';
import Header from '././components/Header/Header';
// import NotFound from '././components/NotFound/NotFound';




const Routes = () => (
  <BrowserRouter basename="/react">
    <div className="">
        <Header/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/account" component={Account}/>
        <Route path="/account/:id" component={Transaction}/>
        {/* <Route path="*" component={NotFound}/> */}
    </div>
  </BrowserRouter>
);

export default Routes;