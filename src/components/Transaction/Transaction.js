import React, {Component} from 'react';
import { Table, Pagination } from 'react-bootstrap';
import './Transaction.css';
import { GetTransactions } from '../../services/GetTransactions';
import TransactionList from './TransactionList';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RightBox from "../rightbox/rightbox";
import TopBox from "../topbox/topbox";
import logo from '../../assets/images/scotiapesoo.png';

class Transaction extends Component {

  //Constructor 
  constructor(props) {
    super(props);

    // bind <this> to the event methods
    this.changePage = this.changePage.bind(this);
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
      console.log(result);
      this.setState({items: result.transactions.splice(0,50)})   
    });
  }

  // <Pagination bsSize="medium" maxButtons={10} first last next prev boundaryLinks 
  //        items={pages} activePage={current_page} onSelect={this.changePage} />

  render() {
    //pagination
    const per_page = 10;
    const pages = Math.ceil(this.props.users.length / per_page);
    const current_page = this.props.page;
    const start_offset =(current_page -1)*per_page;
    let start_count = 0;

    return (
      <section>
        <div className="row pushBottom">
          {/* for topbox */}
          <TopBox/>
        </div>
        <div className="row main2">
          <div className="col-md-3">
          {/*  for accordion */}
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
                <div className="medium-12">
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
                    {this.props.users.map((item, index) =>{            
                        return (
                          <TransactionList key={item.id} item={item} />
                        )}
                    )}
                  </Table>     
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            {/* for right box */}
            <RightBox/>
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