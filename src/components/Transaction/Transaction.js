import React, {Component} from 'react';
import { Table, Pagination } from 'react-bootstrap';
import './Transaction.css';
import { GetTransactions } from '../../services/GetTransactions';
import TransactionList from './TransactionList';
import { connect } from 'react-redux';

class Transaction extends Component {

  // constructor(props) {
  //   super(props);

  //   const users = [];
  //   for(let i=0;i<10;i++){
  //     users.push({
  //       id: i,
  //       posted_date: '201'+i,
  //       description: 'description' + i,
  //       transaction_amount:{
  //         amount:i
  //       }
  //     });
  //   }
  //   // Assign state itself, and a default value for items
  //   this.state = {
  //     users: users
  //   };
  // }

  componentDidMount(){
    GetTransactions().then((result) => {
      console.log(result);
      this.setState({items: result.transactions.splice(0,50)})   
    });
  }

  // const per_page = 10;
  //     const pages = Math.ceil(this.props.items.length / per_page);
  //     const current_page = this.props.page;
  //     <Pagination bsSize="medium" maxButtons={10} first last next prev boundaryLinks 
  //     items={pages} activePage={current_page} />

  render() {
  
    return (
      <div className="row small-up-2 medium-up-3 large-up-4" id="Body">
      <div className="medium-12 columns">
        <h2>Transaction</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>          
          {/* {this.state.items.map(item => */}
          {this.props.users.map((item) =>{
            return (
              <TransactionList key={item.id} item={item} />
            )} 
          )}
        </Table> 
      </div>
    </div>
    );
  }
}

// export the connected class
function mapStateToProps(state){
  return({
    users: state.users,
  })
}
export default connect(mapStateToProps) (Transaction)
// export default Transaction;