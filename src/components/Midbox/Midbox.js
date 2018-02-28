import React, {Component} from 'react';
import logo from '../../assets/images/scotiapesoo.png';
import './Midbox.css';
import { Panel, ProgressBar } from 'react-bootstrap';

class Midbox extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        open: false
      };
	}
	
	componentDidMount(){
		this.setState({details:this.props.details})

	}

	handleClick(){
		this.setState({ open: !this.state.open });
	}
  
    render() {
		// let module1 = null;
		// const details = this.props.details;
		// console.log(this.state.details);
		
		// if('undefined' != details){
		// 	let module1= details.primary_balance.amount;
		// }else{
		// 	'2222.222.22'
		// }

		let module = null;
		let moduleText = null;
		if(!this.state.open){
			moduleText = "Más"
			module = <span className="glyphicon glyphicon-chevron-down"></span>
		  }else{
			moduleText="Menos"
			// module = <i className="fas fa-chevron-up"></i>
			module = <span className="glyphicon glyphicon-chevron-up"></span>
		}
	  
      return (
        <div className="account-balance-container row pushRight" id="cc_balance_container_id">
				<div className="RUIFW-col-12  mrgn-btm-15 col-sm-12 col-sm-12">
					<h6> Resumen
						<span id="cc_lbl_credit_limit_id">
							<a href="" className="RUIFW-tooltip" data-toggle="tooltip" title="" data-placement="auto" data-original-title="Cupo Autorizado en Pesos">
								<span className="icon-info-sign"></span>
							</a> Cupo Total: &nbsp;$ 2222.222.22
						</span>
					</h6>
					<div className="progress">
						<ProgressBar bsStyle="success" now={40} />
						<div>
							<span className="sr-only">% Complete (success)</span>
						</div>
					</div>
				</div>
				<div className="clear"></div>
				<div className="RUIFW-col-12  mrgn-btm-15 col-sm-12 col-sm-12">
				<div className="RUIFW-col-4 col-sm-4 col-sm-4">
					<span className="data-label">Cupo Disponible</span>
					<div className="data">
						<label className="leap-data">$ 100.90.00</label>
					</div>
				</div>
				<div className="RUIFW-col-4 col-sm-4 col-sm-4">
					<span className="data-label">Cupo Utilizado</span>
					<div className="data">
						<label className="leap-data">$ 222.00</label>
					</div>
				</div>
				<div className="RUIFW-col-4 col-sm-4 col-sm-4">
					<span className="data-label">Pago Mínimo</span>
					<div className="data">
						<label className="leap-data">$ 200.55.00</label>
					</div>
				</div>
				
				<div className="clear"></div>
				<div className="mrgn-top-15 row pushRight1">
					<div className="RUIFW-col-4 col-sm-4 col-sm-4 ">
						<span className="data-label">Monto Facturado</span>
						<div className="data">
							<label className="leap-data">$ 111.90.00</label>
						</div>
					</div>
					<div className="RUIFW-col-4 col-sm-4 col-sm-4">
						<span className="data-label ">Saldo Disponible Avance</span>
						<div className="data">
							<label className="leap-data">$ 5500.90.00</label>
						</div>
					</div>
					</div>
					<div className="clear"></div>
				</div>
				<div className="RUIFW-col-12 alignright mrgn-top-15 col-sm-12 col-sm-12">
					<span className="veralignmiddle pull-left text-left">
						<span>
							<img src={logo} alt="scotia logo" />
						</span>
					</span>
					<span className="inlineBlock35 veralignmiddle">
						<span className="data-label">Pagar Hasta</span>
						<br />
						<span id="data_paymentDueDate">
							<label className="leap-data">Espere Facturación</label>
						</span>
					</span>
					<input id="transDetailsForm" name="transDetailsForm:ccpaymentbtn" value="Pagar " className="RUIFW-btn-primary mrgn-lft-10 btn btn-danger btn btn-danger btn btn-danger"
					type="submit" />
				</div>
				<div className="clear"></div>
				<a className="toggle-btn col-md-12 ico-angle-up" onClick={this.handleClick.bind(this)}><p> {moduleText}{module}</p></a>
				
				<Panel id="collapsedDiv" expanded={this.state.open}>
				<Panel.Collapse>
					<Panel.Body>
						<div className="well col-sm-12">
							<div className="col-sm-4">
								<span>Fecha de Última Facturación</span><br /><br />
								<span>26/06/2016</span>
							</div>
							<div className="col-sm-4">
								<span>Fecha Último Pago</span><br /><br />
								<span>26/06/2016</span>
							</div>
							<div className="col-sm-4">
								<span>Monto Último Pago</span><br /><br />
								<span>$ 333.322</span>
							</div>
						</div>	
						<div className="well col-sm-12">
							<div className="col-sm-4">
								<span>Cupo Total Dólares</span><br /><br />
								<span>USD 10.122,20</span>
							</div>
							<div className="col-sm-4">
								<span>Cupo Utilizado Dólares</span><br /><br />
								<span>USD 12.111,12</span>
							</div>
							<div className="col-sm-4">
								<span>Saldo del Último Estado de Cuenta</span><br /><br />
								<span>USD 22.456,32</span>
							</div>
						</div>			
					</Panel.Body>
				</Panel.Collapse>
				</Panel>
				
			</div>
        );
    }
}
      
export default Midbox;