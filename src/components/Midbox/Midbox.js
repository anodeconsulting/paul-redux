import React, {Component} from 'react';
import logo from '../../assets/images/scotiapesoo.png';
import './Midbox.css';

class Midbox extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        open: true
      };
    }
  
    render() {
      return (
        <div className="account-balance-container row pushRight" id="cc_balance_container_id">
				<div className="RUIFW-col-12  mrgn-btm-15 col-sm-12 col-sm-12">
					<h6> Resumen
						<span id="cc_lbl_credit_limit_id">
							<a href="" className="RUIFW-tooltip" data-toggle="tooltip" title="" data-placement="auto" data-original-title="Cupo Autorizado en Pesos">
								<span className="icon-info-sign"></span>
							</a> Cupo Total: &nbsp;$ 2.222.222.222
						</span>
					</h6>
					<div className="progress">
						<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
							<span className="sr-only">% Complete (success)</span>
						</div>
					</div>
				</div>
				<div className="clear"></div>
				<div className="floatLeft">
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
					<input id="transDetailsForm:ccpaymentbtn" name="transDetailsForm:ccpaymentbtn" value="Pagar " className="RUIFW-btn-primary mrgn-lft-10 btn btn-danger btn btn-danger btn btn-danger"
					type="submit" />
				</div>
				<div className="clear"></div>
				<a className="toggle-btn col-md-12 ico-angle-up" href="">Más</a>
			</div>
        );
    }
}
      
export default Midbox;