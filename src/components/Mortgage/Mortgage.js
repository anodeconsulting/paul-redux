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
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import Link from "react-router-dom/es/Link";
import RedDropDownBtn from "../Tools/RedDropdownBtn/RedDropDownBtn";

class Mortgage extends Component {

  //Constructor 
  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.state = {
      open: false,
      redBtn: false
    };
  }

  componentDidMount(){
    GetMortgageDetails().then((result) => {
        let balance = result.primary_balance.amount || 0;
        let curCode = result.primary_balance.currency_code || '$';
        this.setState({balance: "5150654"});
        this.setState({curCode: curCode});
        this.setState({details: result});    
      });


    GetMortgageTransactions().then((result) => {
      let data = result.transactions;
      for(let i=0;i<data.length;i++){
        data[i].id = i+1;
        data[i].date = data[i].due_date[0]+'-'+data[i].due_date[1]+'-'+data[i].due_date[2];
        data[i].dividend = "001";
        data[i].dataAmount = data[i].transaction_amount.amount;
      }
      this.setState({items: data})   
    });
    
  }

    redBtnToggle(){
        this.setState({redBtn: !this.state.redBtn});
    }

  render() {  
    
    let pathName = this.props.location.pathname;
    let type = this.props.location.pathname.split('/')[2];
    let module = 
    <div className="product-title">
      <span className="product-name">{pathName.split('/')[3]}</span> 
      <span className="product-amt">{this.state.balance} {this.state.curCode}</span>
      <Dropdown isOpen={this.state.redBtn} toggle={()=>{this.redBtnToggle()}} tag="span">
        <DropdownToggle
            tag="a"
            data-toggle="dropdown"
            aria-expanded={()=>{this.redBtnToggle()}}>
          <RedDropDownBtn open = {this.state.redBtn} />
        </DropdownToggle>
        <DropdownMenu tag="ul">
          <li role="presentation" className="squaren-btn-item">
            <Link to={`/pay`}>Pagar</Link>
          </li>
        </DropdownMenu>
      </Dropdown>
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
            <Leftbox location = {this.props.location}/>
          </div>
          <div className="col-md-6 pushRight">
            {/* for mid box */}
              {module}
              <Midbox details={this.state.balance} currency={this.state.curCode} type = {type}/>
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