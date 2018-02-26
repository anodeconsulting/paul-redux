import React, {Component} from 'react';
import './Transaction.css';
import { GetTransactions } from '../../services/GetTransactions';
import Leftbox from '../Leftbox/Leftbox';
import { connect } from 'react-redux';
import RightBox from "../Rightbox/Rightbox";
import TopBox from "../Topbox/Topbox";
import Midbox from "../Midbox/Midbox";
import Table from "../Table/Table";
import { location } from 'react-router';

class Transaction extends Component {

  //Constructor 
  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.state = {
      data: '',
      open: true
    };
  }

  componentDidMount(){
    GetTransactions().then((result) => {
      let data = result.transactions.splice(0,50);
      for(let i=0;i<data.length;i++){
        data[i].dataAmount = data[i].transaction_amount.amount;
      }
      this.setState({items: data})   
    });
  }

  render() {
    let pathName = this.props.location.pathname.split('/')[3];
    let module = 
    <div className="product-title">
      <span className="product-name">{pathName}</span> 
      <span className="product-amt">$ 2.222.222.222</span>
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
            <br />
          </div>
          <div className="col-md-6 pushRight">
            {/* for mid box */}
            {module}
            <Midbox/>
            <br />
            <div>
              <div className="row" id="Body">  
                {/* react bootstrap table */}
                <Table items={this.state.items}/>
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
export default connect(mapStateToProps) (Transaction)
// export default Transaction;