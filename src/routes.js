import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "././components/Login/Login";
import Header from "././components/Header/Header";
import Account from "././components/Account/BillingAccount";
import { connect } from "react-redux";
import { addLocaleData, IntlProvider } from "react-intl";
import messages from "./components/I18n/messages";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import { flattenMessages } from "./components/I18n/Utils";
// import NotFound from '././components/NotFound/NotFound';

class Routes extends Component {
  componentWillMount() {
    // the first time we load the app, we need that users list
    this.props.dispatch({ type: "USERS_FETCH_LIST" });
  }

  yourHandler(previousRoute, nextRoute) {
    //do your logic here
    console.log("zzzz");
  }

  render() {
    var users = this.props.users;
    addLocaleData([...en, ...es]);
    return (
      <IntlProvider
        textComponent={React.Fragment}
        locale={this.props.users.id}
        messages={flattenMessages(messages[this.props.users.id])}
      >
        <BrowserRouter basename="/entryport" onChange={this.yourHandler}>
          <div className="">
            <Header users={users} />
            <Route exact path="/" component={Login} />
            <Route exact path="/billing-account" component={Account} />
            <Route
              path="/msfui"
              component={() =>
                (window.location = "https://www.novaera.io/mssf/#")
              }
            />
            <Route
              path="/login/oauth2"
              component={() =>
                (window.location = "https://www.novaera.io/mssf/login/oauth2")
              }
            />
            <Route
              path="/test/oauth2"
              component={() => (window.location = "http://www.google.ca")}
            />
            <Route
              path="/test?code=123"
              component={() => this.props.history.push("/test/oauth2")}
            />
            {/* <Route exact path="/account" component={Account} />
            <Route path="/account/:id/:id" component={TransactionList} />
            <Route
              exact
              path="/credit/:id/:id"
              component={TransactionListCredit}
            />
            <Route
              exact
              path="/thirdPartyTransfer"
              component={ThirdPartyTransfer}
            />
            <Route
              exact
              path="/accountTransfer"
              component={SameAccountTransfer}
            />
            <Route
              exact
              path="/transfer/transaction"
              component={TransferTransaction}
            /> */}
            {/* <Route exact path="/statement" component={Statement} />
            <Route exact path="/statement/:id" component={PDF} />
            <Route exact path="/pay" component={Pay} />
            <Route exact path="/pay/mutualfund" component={MutualFund} />
            <Route
              exact
              path="/mutualFund/transaction"
              component={MutualFundTransaction}
            />
            <Route exact path="/pay/transaction" component={PayTransaction} />
            <Route exact path="/configuration" component={Configuration} />
            <Route exact path="/password" component={Password} /> */}

            {/* <Route path="*" component={NotFound}/> */}
          </div>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps)(Routes);
