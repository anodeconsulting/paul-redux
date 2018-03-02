import React from 'react';
import {BrowserRouter,  Route} from 'react-router-dom';

import Account from '././components/Account/Account';
import Transaction from '././components/Transaction/Transaction';
import Cheque from '././components/Transaction/Cheque';
import Login from '././components/Login/Login';
import Header from '././components/Header/Header';
import ThirdPartyTransfer from "././components/Transfer/ThirdPartyTransfer";
import SameAccountTransfer from "././components/Transfer/SameAccountTransfer";
import Pay from "././components/Pay/Pay";
import MutualFund from "././components/MutualFund/MutualFund";
import MutualFundTransaction from "././components/Transaction/MutualFundTransaction";
import PayTransaction from "././components/Transaction/PayTransaction";
import TransferTransaction from "././components/Transaction/TransferTransaction";
import TransactionList from "././components/Transaction/TransactionList";
import TransactionListCredit from "././components/Transaction/TransactionListCredit";
import Statement from "././components/Statement/Statement";
import PDF from "././components/Statement/PDFWrapper";

// import NotFound from '././components/NotFound/NotFound';

const Routes = () => (
  <BrowserRouter basename="/react">
    <div className="">
        <Header/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/account" component={Account}/>
        <Route path="/account/:id/:id" component={TransactionList}/>
        <Route exact path="/credit/:id/:id" component={TransactionListCredit}/>
        <Route exact path="/thirdPartyTransfer" component={ThirdPartyTransfer}/>
        <Route exact path="/accountTransfer" component={SameAccountTransfer}/>
        <Route exact path="/transfer/transaction" component={TransferTransaction}/>
        <Route exact path="/statement" component={Statement}/>
        <Route exact path="/statement/:id" component={PDF}/>
        <Route exact path="/pay" component={Pay}/>
        <Route exact path="/pay/mutualfund" component={MutualFund}/>
        <Route exact path="/mutualFund/transaction" component={MutualFundTransaction}/>
        <Route exact path="/pay/transaction" component={PayTransaction}/>

        {/* <Route path="*" component={NotFound}/> */}
    </div>
  </BrowserRouter>
);

export default Routes;