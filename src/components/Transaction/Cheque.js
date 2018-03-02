import React, {Component} from 'react';
import './Transaction.css';
import { GetDepositeTransactions } from '../../services/GetDepositeTransactions';
import { GetDepositeDetails } from '../../services/GetDepositeDetails';
import Leftbox from '../Leftbox/Leftbox';
// import { connect } from 'react-redux';
import RightBox from "../Rightbox/Rightbox";
import TopBox from "../Topbox/Topbox";
import Midbox from "../Midbox/Midbox";
import TableDeposite from "../Table/TableDeposite";
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import Link from "react-router-dom/es/Link";
import RedDropDownBtn from "../Tools/RedDropdownBtn/RedDropDownBtn";
// import DropDown from "../Midbox/DropDown";
// import TableMeta from "../Table/TableMeta";
// import { location } from 'react-router';

class Cheque extends Component {

  //Constructor 
  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.state = {
      data: '',
      open: true,
      curCode: '$',
      redBtn: false
    };
  }

  componentDidMount(){
    GetDepositeDetails().then((result) => {
      // console.log(result);
      let balance = result.available_balance.amount || 0;
      this.setState({balance: balance});  
      this.setState({details: result}); 
      // console.log(this.state.details); 
    });

    GetDepositeTransactions().then((result) => {
      let data = result.transactions;
      for(let i=0;i<data.length;i++){
        data[i].id = i+1;
        data[i].dataSaldo = data[i].running_balance.amount;
        data[i].dataMonto = data[i].transaction_amount.amount;
      }
      // console.log(data);
      this.setState({items: data})   
    });
    
  }

    redBtnToggle(){
        this.setState({redBtn: !this.state.redBtn});
    }

  render() {
    let pathName = this.props.location.pathname.split('/')[3];
    let type = this.props.location.pathname.split('/')[2];
    let module = 
    <div className="product-title">
      <span className="product-name">{pathName}</span> 
      <span className="product-amt">$ {this.state.balance}</span>
      <Dropdown isOpen={this.state.redBtn} toggle={()=>{this.redBtnToggle()}} tag="span">
        <DropdownToggle
            tag="a"
            data-toggle="dropdown"
            aria-expanded={()=>{this.redBtnToggle()}}>
          <RedDropDownBtn open = {this.state.redBtn} />
        </DropdownToggle>
        <DropdownMenu tag="ul">
          <li role="presentation" className="squaren-btn-item">
            <Link to={`/thirdPartyTransfer`}>Transferir a Terceros</Link>
          </li>
          <li role="presentation" className="squaren-btn-item">
            <Link to={`/accountTransfer`}>Transferencias entre Mis Cuentas</Link>
          </li>
        </DropdownMenu>
      </Dropdown>
    </div>
    ;
         
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
            <br />
          </div>
          <div className="col-md-6 pushRight">
            {/* for mid box */}
            {module}
            <Midbox details={this.state.balance} currency={this.state.curCode} type = {type}/>
            <br />
            <div>
              <div className="row" id="Body">  
                {/* react bootstrap table */}
                <TableDeposite items={this.state.items}/>
                {/* <TableMeta items={this.state.items}/> */}

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
// function mapStateToProps(state){
//   return({
//     users: state.users,
//     // page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
//   })
// }
// export default connect(mapStateToProps) (Cheque)
export default Cheque;