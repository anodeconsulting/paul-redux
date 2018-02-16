import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { GetAccounts } from "../../services/GetAccounts"
import { Table } from 'react-bootstrap';
import './Account.css';
import RightBox from "../Rightbox/Rightbox";
import TopBox from "../Topbox/Topbox";
import Calendar from "../Calendar/Calendar";

class Account extends Component {

  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.state = {
      items: []
    };
  }

  componentDidMount(){
    GetAccounts().then((result) => {
      this.setState({items: result})   
     });
  }


  render() {

      return (
        <section >
            <TopBox/>
            <div className="row">
              <div className="RUIFW-content-main RUIFW-col-9 col-md-9 col-sm-9">

                <div className="summerary-title">
                  <i className="fa fa-caret-right arrow-down" aria-hidden="true"></i>
                  <h2 className="account-title" >Resumen de Productos</h2>
                </div>

                <div className="summerary-title">
                  <i className="fa fa-caret-right arrow-down" aria-hidden="true"></i>
                  <h2 className="account-title">Cuentas Bancarias</h2>
                </div>

                <div className="summerary-title">
                  <i className="fa fa-caret-down arrow-down" aria-hidden="true"></i>
                  <h2 className="account-title">Credits and Credit Cards</h2>
                </div>


                <div className="" id="Body">
                  <div className="">
                    {/* <Link to={'/account/'+}"/account/transaction">Transaction</Link> */}
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
                              <td><Link to={`/account/${item.id}`}>{item.type}</Link></td>
                              <td>{item.primary_balance.amount}</td>
                            </tr>
                            </tbody>
                        )}
                    </Table>
                  </div>

                  <div className="calendar">
                    <Calendar/>
                  </div>
                </div>
              </div>

              <div className="RUIFW-content-side RUIFW-col-3 col-md-3 col-sm-3">
                <RightBox location = {this.props.location}/>
              </div>
            </div>

        </section>


    );
  }
}

export default Account;