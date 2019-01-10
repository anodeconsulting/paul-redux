import React, { Component } from "react";
import { Router } from 'react-router';
import { BrowserRouter, Route } from "react-router-dom";
import { history } from "./helpers/history";

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
      <Router  history={history}>
        <div className="">
          <Header users={users} />
          <Route exact path="/" component={Login} />
          <Route exact path="/billing-account" component={Account} />
          <Route
            path="/msfui"
            component={
              () =>
              {
                  // window.location.href = "https://www.google.ca"; return null;}
                      window.location = "https://www.novaera.io/#"; return null;}
            }
          />
          <Route
            path="/login/oauth2"
            component={() =>
              (window.location = "https://www.novaera.io/login/oauth2")
            }
          />
        </div>
      </Router>
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
