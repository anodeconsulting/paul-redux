import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "././components/Login/Login";
// import NotFound from "././components/NotFound/NotFound";

import Header from "././components/Header/Header";
import Account from "././components/Account/BillingAccount";
import { connect } from "react-redux";
// import { history } from "./helpers/history";

class Routes extends Component {
  componentWillMount() {
    // the first time we load the app, we need that users list
    // this.props.dispatch({ type: "USERS_FETCH_LIST" });
  }

  render() {
    var users = this.props.users;
    return (
      // <Router basename="/entryport" history={history}>
      <BrowserRouter basename="/entryport">
        <div className="">
          <Header users={users} />
          <Route exact path="/" component={Login} />
          <Route exact path="/billing-account" component={Account} />
          <Route
            path="/msfui"
            component={
              () =>
                  (window.location = "https://www.novaera.io/#")
              // (window.location = "https://www.google.ca")
            }
          />
          <Route
            path="/login/oauth2"
            component={() =>
              (window.location = "https://www.novaera.io/login/oauth2")
            }
          />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}
export default connect(mapStateToProps)(Routes);
