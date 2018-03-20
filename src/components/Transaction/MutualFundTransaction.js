import React, {Component} from 'react';
import './Transaction.css';
import { Button, Alert } from 'react-bootstrap';
import button1 from '../../assets/images/button1.png';
import TableMutualFund from "../Table/TableMutualFund";
import RightBox from "../Rightbox/Rightbox";
import TopBox from "../Topbox/Topbox";
import AlertSuccess from '../Tools/Alert/Alert_Success';
import * as Services from '../../services/Services';
import { FormattedMessage } from 'react-intl';

class MutualFundTransaction extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            length: 2,
            show: true
        };
        this.handleDismiss = this.handleDismiss.bind(this);
        window.scrollTo(0,100);
    }

    handleDismiss(){
      this.setState({ show: false });
    }

    componentDidMount(){
      Services.GetMortgageTransactions().then((result) => {
        let data = result.transactions;
        for(let i=0;i<data.length;i++){
          data[i].dataAmount = data[i].transaction_amount.amount;
          data[i].cuenta = "Depósito Plazo Fijo *** 0056";
          data[i].desc = "<Glosa Scotiaweb Inv >Inversiones";
          data[i].due_date= data[i].due_date[0].toString()+'-'+data[i].due_date[1].toString()+'-'+data[i].due_date[2].toString();
        } 
        // console.log(data);
        this.setState({items: data})  
        this.setState({length: data.length})  
      });
    }

    render() {
      let moduleAlert = <AlertSuccess />;
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
                            <h5 className="mrgn-btm-5 mrgn-top-5"><FormattedMessage id='invest_mutualfund.step3.text1' />  ({this.state.length})</h5>
                        </div>
                        <div className="RUIFW-col-6 txt-right col-sm-6">
                            <span><img width="70" src={button1} alt="scotia button1" /></span>   
                        </div>
                    </div><br />
              <div id="Body">  
                {/* react bootstrap table */}
                <TableMutualFund items={this.state.items}/>
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

export default MutualFundTransaction;