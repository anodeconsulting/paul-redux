import React, {Component} from 'react';
import './Topbox.css';
import Link from "react-router-dom/es/Link";

class TopBox extends Component {

    handleClick(){
        window.print();
    }

    render() {
        return (
            <div className="row">
                <h3 className=" col-sm-12 h1title">&nbsp;Mis Productos</h3>
                <div className="col-sm-12 account-icon">
                    <a className="print-icon" onClick={this.handleClick.bind(this)}></a>
                    <a className="caculate-icon"></a>
                    <a className="download-icon"></a>

                </div>


                <div className="quick-menu-box chile-quickmenu row">
                    <div className="col-lg-3 col-sm-6 boxsize pay-bill">
                        <Link to={`/thirdPartyTransfer`} >Transferencias a Cuentas en Scotiabank o en Otro Banco</Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 send-money boxsize">
                        <Link to={`/accountTransfer`} >Transferencias entre mis Cuentas y Pago de Línea de Crédito</Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 transfer boxsize">
                        <Link to={`#`} >Pagar Servicios<span>Pagos de Servicios en Línea</span></Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 topup-mobile boxsize">
                        <Link to={`#`} ><span>Avances en Efectivo en una o más Cuotas</span></Link>
                    </div>
                </div>

            </div>
        );
    }
}



export default TopBox ;