import React, {Component} from 'react';
import './topbox.css';

class TopBox extends Component {
    render() {
        return (
            <div>
                <h3 className=" col-sm-12 h1title">&nbsp;Mis Productos</h3>
                <div className="col-sm-12 account-icon">
                    <a className="print-icon"></a>
                    <a className="caculate-icon"></a>
                    <a className="download-icon"></a>

                </div>


                <div className="quick-menu-box chile-quickmenu row">
                    <div className="col-lg-3 col-sm-6">
                        <a id="quickMenuBoxLinkForm:tptQuickBoxLink" href="#" className="pay-bill boxsize">
                            <span>Transferencias a Cuentas en Scotiabank o en Otro Banco</span>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a id="quickMenuBoxLinkForm:ftQuickBoxLink" href="#"  className="send-money boxsize">
                            Transferir entre mis Cuentas<span>Transferencias entre mis Cuentas y Pago de Línea de Crédito</span>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a id="paymentQuickBoxLink" className="transfer boxsize" title="Pagar Servicios"  >
                            Pagar Servicios<span>Pagos de Servicios en Línea</span>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a id="quickMenuBoxLinkForm:cashAdvanceQuickBoxLink" href="#"  className="topup-mobile boxsize">
                            <span>Avances en Efectivo en una o más Cuotas</span>
                        </a>
                    </div>
                    <div className="clear"></div>
                </div>

            </div>
        );
    }
}



export default TopBox ;