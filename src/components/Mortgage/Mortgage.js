import React, {Component} from 'react';
import './Mortgage.css';
import { GetTransactions } from '../../services/GetTransactions';
import { GetMortgageTransactions } from '../../services/GetMortgageTransactions';
import Leftbox from '../Leftbox/Leftbox';
import { connect } from 'react-redux';
import RightBox from "../Rightbox/Rightbox";
import TopBox from "../Topbox/Topbox";
import Midbox from "../Midbox/Midbox";
import TableMortgage from "../Table/TableMortgage";
import { location } from 'react-router';
import {GetMortgageDetails} from "../../services/GetMortgageDetails";

class Mortgage extends Component {

  //Constructor 
  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.state = {
      open: false
    };
  }

  componentDidMount(){
    GetMortgageDetails().then((result) => {
        let balance = result.primary_balance.amount || 0;
        let curCode = result.primary_balance.currency_code || '$';
        this.setState({balance: balance});
        this.setState({curCode: curCode})   
      });


    GetMortgageTransactions().then((result) => {
      let data = result.transactions;
      for(let i=0;i<data.length;i++){
        data[i].date = data[i].due_date[0]+'-'+data[i].due_date[1]+'-'+data[i].due_date[2];
        data[i].dividend = "001";
        data[i].dataAmount = data[i].transaction_amount.amount;
      }
      this.setState({items: data})   
    });
    
  }

  render() {  
    
    let pathName = this.props.location.pathname;
    let module = 
    <div className="product-title">
      <span className="product-name">{pathName.split('/')[3]}</span> 
      <span className="product-amt">{this.state.balance} {this.state.curCode}</span>
    </div>;

    return (
      <section>
        <div className="pushBottom">
          {/* for topbox */}
          <TopBox/>
        </div>
        <div className="row main2">
          <div className="col-md-3">
          {/*  for accordion */}
            <Leftbox/>
          </div>
          <div className="col-md-6 pushRight">
            {/* for mid box */}
              {module}
              <Midbox/>
            <br />
            <div>
              <div className="row" id="Body"> 
                {/* react bootstrap table */}
                <TableMortgage items={this.state.items}/>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            {/* for right box */}
            <RightBox location = {this.props.location}/>
          </div>
        </div>       
    </section>
    );
  }
}

// export the connected className
function mapStateToProps(state){
  return({
    users: state.users,
    // page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  })
}
export default connect(mapStateToProps) (Mortgage)
// export default Transaction;