import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { GetAccounts } from "../../services/GetAccounts"
import { Table } from 'react-bootstrap';
import './Account.css';

class Account extends Component {

  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.state = {
      items: []
    };
  }

  componentWillMount(){
    GetAccounts().then((result) => {
      this.setState({items: result})   
     });
  }

  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4" id="Body">
      <div className="medium-12 columns">
        <h2>Account Page</h2>
        <Link to="/account/transaction">Transaction</Link>        
          <Table responsive>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>          
            {this.state.items.map(item =>
              <tbody key={item.id}>
                <tr>
                  <td>{item.type}</td>
                  <td>{item.primary_balance.amount}</td>
                </tr>
              </tbody>
            )}
          </Table>                  
      </div>
    </div>
    );
  }
}

export default Account;