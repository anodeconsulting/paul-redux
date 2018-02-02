import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './Account.css';

class Account extends Component {
  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4" id="Body">
      <div className="medium-12 columns">
        <h2>Account Page</h2>
        <Link to="/account/transaction">Transaction</Link>
      </div>
    </div>
    );
  }
}

export default Account;