import React from 'react';
import {BrowserRouter,  Route} from 'react-router-dom';

import Account from '././components/Account/Account';
import Transaction from '././components/Transaction/Transaction';
import Login from '././components/Login/Login';
import Header from '././components/Header/Header';
import ThirdPartyTransfer from "././components/Transfer/ThirdPartyTransfer";
import SameAccountTransfer from "././components/Transfer/SameAccountTransfer";
import Pay from "././components/Pay/Pay";
import MutualFund from "././components/MutualFund/MutualFund";
import CreditCard from "././components/CreditCard/CreditCard";
import MutualFundTransaction from "././components/Transaction/MutualFundTransaction";
import PayTransaction from "././components/Transaction/PayTransaction";
import TransferTransaction from "././components/Transaction/TransferTransaction";

// import NotFound from '././components/NotFound/NotFound';

const Routes = () => (
  <BrowserRouter basename="/react">
    <div className="">
        <Header/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/account" component={Account}/>
        <Route path="/account/:id/:id" component={Transaction}/>
        <Route exact path="/thirdPartyTransfer" component={ThirdPartyTransfer}/>
        <Route exact path="/accountTransfer" component={SameAccountTransfer}/>
        <Route exact path="/transfer/transaction" component={TransferTransaction}/>

        <Route exact path="/pay" component={Pay}/>
        <Route exact path="/pay/mutualfund" component={MutualFund}/>
        <Route exact path="/credit/:id/:id" component={CreditCard}/>
        <Route exact path="/mutualFund/transaction" component={MutualFundTransaction}/>
        <Route exact path="/pay/transaction" component={PayTransaction}/>

        {/* <Route path="*" component={NotFound}/> */}
    </div>
  </BrowserRouter>
);

export default Routes;