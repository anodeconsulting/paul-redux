import React, {Component} from 'react';
import './Topbox.css';
import Link from "react-router-dom/es/Link";
import { FormattedMessage } from 'react-intl';

class TopBox extends Component {

    handleClick(){
        window.print();
    }

    render() {
        return (
            <div className="row">
                <h3 className=" col-sm-12 h1title">&nbsp;<FormattedMessage id='nav.product' /></h3>
                <div className="col-sm-12 account-icon">
                    <a className="print-icon" onClick={this.handleClick.bind(this)}></a>
                    <a className="caculate-icon"></a>
                    <a className="download-icon"></a>

                </div>


                <div className="quick-menu-box chile-quickmenu row">
                    <div className="col-lg-3 col-sm-6 boxsize pay-bill">
                        <Link to={`/thirdPartyTransfer`} ><FormattedMessage id='topbox.topbox1' /></Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 send-money boxsize">
                        <Link to={`/accountTransfer`} ><FormattedMessage id='topbox.topbox2' /></Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 transfer boxsize">
                        <Link to={`#`} >Pagar Servicios<span><FormattedMessage id='topbox.topbox3' /></span></Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 topup-mobile boxsize">
                        <Link to={`#`} ><span><FormattedMessage id='topbox.topbox4' /></span></Link>
                    </div>
                </div>

            </div>
        );
    }
}



export default TopBox ;