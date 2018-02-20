import React from 'react';
import {BrowserRouter,  Route} from 'react-router-dom';

import Account from '././components/Account/Account';
import Transaction from '././components/Transaction/Transaction';
import Login from '././components/Login/Login';
import Header from '././components/Header/Header';
import ThirdPartyTransfer from "././components/Transfer/ThirdPartyTransfer";
import Pay from "././components/Pay/Pay";
import MutualFund from "././components/MutualFund/MutualFund";
import CreditCard from "././components/CreditCard/CreditCard";
import MutualFundTransaction from "././components/Transaction/MutualFundTransaction";
// import NotFound from '././components/NotFound/NotFound';

const Routes = () => (
  <BrowserRouter basename="/react">
    <div className="">
        <Header/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/account" component={Account}/>
        <Route path="/account/:id" component={Transaction}/>
        <Route exact path="/thirdPartyTransfer" component={ThirdPartyTransfer}/>
        <Route exact path="/pay" component={Pay}/>
        <Route exact path="/pay/mutualfund" component={MutualFund}/>
        <Route exact path="/credit/:id" component={CreditCard}/>
        <Route exact path="/mutualFund/transaction" component={MutualFundTransaction}/>
        {/* <Route path="*" component={NotFound}/> */}
    </div>
  </BrowserRouter>
);

export default Routes;