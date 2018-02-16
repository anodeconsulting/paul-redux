import React, {Component} from 'react';
import './Transaction.css';
import { GetTransactions } from '../../services/GetTransactions';
import Accordion from '../Accordion/Accordion';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RightBox from "../Rightbox/Rightbox";
import TopBox from "../Topbox/Topbox";
import logo from '../../assets/images/scotiapesoo.png';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

function priceFormatter(cell, row) {
  return `$ ${cell}`;
}

class Transaction extends Component {

  //Constructor 
  constructor(props) {
    super(props);

    // bind <this> to the event methods
    this.changePage = this.changePage.bind(this);
    // Assign state itself, and a default value for items
    this.state = {
      data: '',
      open: true
    };
  }
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
      let data = result.transactions.splice(0,50);
      for(let i=0;i<data.length;i++){
        data[i].dataAmount = data[i].transaction_amount.amount;
      }
      this.setState({items: data})   
    });
  }

  

  // <Pagination bsSize="medium" maxButtons={10} first last next prev boundaryLinks 
  //        items={pages} activePage={current_page} onSelect={this.changePage} />
//   <div className="medium-12">
//   <h2>Transaction</h2>
//   <Table responsive>
//     <thead>
//       <tr>
//         <th>Date</th>
//         <th>Description</th>
//         <th>Amount</th>
//       </tr>
//     </thead>
//     {/* {this.state.items.map(item => */}
//     {this.props.users.map((item) =>{            
//         return (
//           <TransactionList key={item.id} item={item} />
//         )}
//     )}
//   </Table>     
// </div>
  render() {
    
    return (
      <section>
        <div className="row pushBottom">
          {/* for topbox */}
          <TopBox/>
        </div>
        <div className="row main2">
          <div className="col-md-3">
          {/*  for accordion */}
          <Accordion/>
          {/* end of accordion */}
          </div>
          <div className="col-md-6 pushRight">
            {/* for mid box */}
            <div className="account-balance-container row pushRight" id="cc_balance_container_id">
				<div className="RUIFW-col-12  mrgn-btm-15 col-sm-12 col-sm-12">
					<h6> Resumen
						<span id="cc_lbl_credit_limit_id">
							<a href="" className="RUIFW-tooltip" data-toggle="tooltip" title="" data-placement="auto" data-original-title="Cupo Autorizado en Pesos">
								<span className="icon-info-sign"></span>
							</a> Cupo Total: &nbsp;No Disponible
						</span>
					</h6>
					<div className="progress">
						<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
							<span className="sr-only">% Complete (success)</span>
						</div>
					</div>
				</div>
				<div className="clear"></div>
				<div className="RUIFW-col-4 col-sm-4 col-sm-4">
					<span className="data-label">Cupo Disponible</span>
					<div className="data">
						<label className="leap-data">No Disponible</label>
					</div>
				</div>
				<div className="RUIFW-col-4 col-sm-4 col-sm-4">
					<span className="data-label">Cupo Utilizado</span>
					<div className="data">
						<label className="leap-data">No Disponible</label>
					</div>
				</div>
				<div className="RUIFW-col-4 col-sm-4 col-sm-4">
					<span className="data-label">Pago Mínimo</span>
					<div className="data">
						<label className="leap-data">No Disponible</label>
					</div>
				</div>
				<div className="clear"></div>
				<div className="mrgn-top-15 row pushRight1">
					<div className="RUIFW-col-4 col-sm-4 col-sm-4 ">
						<span className="data-label">Monto Facturado</span>
						<div className="data">
							<label className="leap-data">No Disponible</label>
						</div>
					</div>
					<div className="RUIFW-col-4 col-sm-4 col-sm-4">
						<span className="data-label ">Saldo Disponible Avance</span>
						<div className="data">
							<label className="leap-data">No Disponible</label>
						</div>
					</div>
					<div className="clear"></div>
				</div>
				<div className="RUIFW-col-12 alignright mrgn-top-15 col-sm-12 col-sm-12">
					<span className="veralignmiddle pull-left text-left">
						<span>
							<img src={logo} />
						</span>
					</span>
					<span className="inlineBlock35 veralignmiddle">
						<span className="data-label">Pagar Hasta</span>
						<br />
						<span id="data_paymentDueDate">
							<label className="leap-data">Espere Facturación</label>
						</span>
					</span>
					<input id="transDetailsForm:ccpaymentbtn" name="transDetailsForm:ccpaymentbtn" value="Pagar " className="RUIFW-btn-primary mrgn-lft-10 btn btn-danger btn btn-danger btn btn-danger"
					type="submit" />
				</div>
				<div className="clear"></div>
				<a className="toggle-btn col-md-12 ico-angle-up" href="">Más</a>
			</div>

            {/* for mid box small-up-2 medium-up-3 large-up-4*/}
            <br />
            <div className="">
              <div className="row" id="Body">
                
                {/* react bootstrap table */}
                <div>
                  <BootstrapTable
                    data={ this.state.items }
                    search={ true }
                    hover
                    pagination>
                    <TableHeaderColumn dataField='posted_date' isKey dataSort>Date</TableHeaderColumn>
                    <TableHeaderColumn dataField='description' searchable={ false }>Description</TableHeaderColumn>
                    <TableHeaderColumn dataField='dataAmount' dataFormat={ priceFormatter } searchable={ false }>Amount</TableHeaderColumn>
                  </BootstrapTable>
                </div>
                {/* end of react bootstrap table */}
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

  // change the users lists current page
  changePage(page)
  {
    this.props.dispatch(push('/?page='+page));
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