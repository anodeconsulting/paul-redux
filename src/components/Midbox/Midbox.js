import React, {Component} from 'react';
import logo from '../../assets/images/scotiapesoo.png';
import './Midbox.css';
import { Panel, ProgressBar } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Midbox extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
		open: false,
		details:''
      };
	}
	
	// componentDidMount(){
	// 	this.setState({details:this.props.details})
	// 	console.log(this.props.details);
	// }

	handleClick(){
		this.setState({ open: !this.state.open });
	}
  
    render() {
		let module = null;
		let moduleText = null;
		if(!this.state.open){
			moduleText = "Más"
			module = <span className="glyphicon glyphicon-chevron-down"></span>
		  }else{
			moduleText="Menos"
			module = <span className="glyphicon glyphicon-chevron-up"></span>
		}

		let module1 = null;		
		const details = this.props.details;
		const curCode = this.props.currency;
		const type = this.props.type;
		// console.log(type);
		let ratio = null;
		let base = null;
		if('deposite' === type){
			base = 4102110.88;
			ratio = details*100/base;
			module1=
			<div className="account-balance-container row pushRight" id="cc_balance_container_id">
				<div className="RUIFW-col-12  mrgn-btm-15 col-sm-12 col-sm-12">
				<div className="RUIFW-col-4 col-sm-4 col-sm-4">
					<span className="data-label">Saldo Disponible</span>
					<div className="data">
						<label className="leap-data">{curCode} {details}</label>
					</div>
				</div>
				<div className="RUIFW-col-4 col-sm-4 col-sm-4">
					<span className="data-label">Retenciones</span>
					<div className="data">
						<label className="leap-data">{curCode} 150.000</label>
					</div>
				</div>
				<div className="RUIFW-col-4 col-sm-4 col-sm-4">
					<span className="data-label">Saldo Contable</span>
					<div className="data">
						<label className="leap-data">{curCode} {details+150}</label>
					</div>
				</div>		
				<div className="clear"></div>
				</div>			
			</div>;
		}else {
			if ('creditcard' === type){
				base = 24110.09;
				ratio = details*100/base;
			}else if ('mortgage' === type){
				base = 3145.67;
				ratio = details*100/base;
			}else{
				base = 335001.67;
				ratio = details*100/base;
			}
			module1=
		<div className="account-balance-container row pushRight" id="cc_balance_container_id">
				<div className="RUIFW-col-12  mrgn-btm-15 col-sm-12 col-sm-12">
					<h6> Resumen
						<span id="cc_lbl_credit_limit_id">
							<a href="" className="RUIFW-tooltip" data-toggle="tooltip" title="" data-placement="auto" data-original-title="Cupo Autorizado en Pesos">
								<span className="icon-info-sign"></span>
							</a> Cupo Total: &nbsp;{curCode} {details} 
						</span>
					</h6>
					<div className="progress">
						<ProgressBar bsStyle="success" now={ratio} />
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
						<label className="leap-data">{curCode} {(base*0.234).toFixed(2)}</label>
					</div>
				</div>
				<div className="RUIFW-col-4 col-sm-4 col-sm-4">
					<span className="data-label">Cupo Utilizado</span>
					<div className="data">
						<label className="leap-data">{curCode} {(base*0.145).toFixed(2)}</label>
					</div>
				</div>
				<div className="RUIFW-col-4 col-sm-4 col-sm-4">
					<span className="data-label">Pago Mínimo</span>
					<div className="data">
						<label className="leap-data">{curCode} {(base*0.567).toFixed(2)}</label>
					</div>
				</div>
				
				<div className="clear"></div>
				<div className="mrgn-top-15 row pushRight1">
					<div className="RUIFW-col-4 col-sm-4 col-sm-4 ">
						<span className="data-label">Monto Facturado</span>
						<div className="data">
							<label className="leap-data">{curCode} {(base*0.213).toFixed(2)}</label>
						</div>
					</div>
					<div className="RUIFW-col-4 col-sm-4 col-sm-4">
						<span className="data-label ">Saldo Disponible Avance</span>
						<div className="data">
							<label className="leap-data">{curCode} {(base*0.002).toFixed(2)}</label>
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
					<Link to='/pay'><input id="transDetailsForm" name="transDetailsForm:ccpaymentbtn" value="Pagar " className="RUIFW-btn-primary mrgn-lft-10 btn btn-danger btn btn-danger btn btn-danger"
					type="submit" /></Link>
				</div>
				<div className="clear"></div>
				<a className="toggle-btn col-md-12 ico-angle-up" onClick={this.handleClick.bind(this)}><p> {moduleText}{module}</p></a>
				
				<Panel id="collapsedDiv" expanded={this.state.open} onToggle={()=> this.handleClick.bind(this)}>
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
		</div>;		
		}
		 
		
	  
      return (
			<div>	
				{module1}
			</div>
        );
    }
}
      
export default Midbox;