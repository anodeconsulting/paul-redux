import React, {Component} from 'react';
import './Transaction.css';
import { Button, Alert } from 'react-bootstrap';
import button1 from '../../assets/images/button1.png';
import TablePay from "../Table/TablePay";
import RightBox from "../Rightbox/Rightbox";
import TopBox from "../Topbox/Topbox";
import AlertSuccess from '../Tools/Alert/Alert_Success';
class PayTransaction extends Component {
     constructor(props) {
        super(props);
        this.state = {
            show: true
        };
        window.scrollTo(0,100);
    }

    render() {
      let   moduleAlert = <AlertSuccess />

        return (
          <div>
            <section>   
            {moduleAlert}        
        <div className="pushBottom">
          {/* for topbox */}
          <TopBox/>
        </div>
        <div className="row main2">
          <div className="col-md-9 pushRight">
            <div>
            <div className="RUIFW-row mrgn-btm-10 row">
                        <div className="RUIFW-col-6 col-sm-6">
                            <h5 className="mrgn-btm-5 mrgn-top-5">Mis Destinatarios  (2)</h5>
                        </div>
                        <div className="RUIFW-col-6 txt-right col-sm-6">
                            <span><img width="70" src={button1} alt="scotia button1" /></span>   
                        </div>
                    </div><br />
              <div id="Body">  
                {/* react bootstrap table */}
                <TablePay items={this.state.items}/>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            {/* for right box */}
            <RightBox location = {this.props.location}/>
          </div>
        </div>       
    </section>
    </div>
        );
    }
}

export default PayTransaction;