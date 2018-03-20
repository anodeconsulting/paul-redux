import React, {Component} from 'react';
import './MutualFund.css';
import {Tabs, Tab, TabContainer, TabContent, TabPane} from 'react-bootstrap';
import MutualFundStep1 from '../Tab/MutualFundStep1';
import MutualFundStep2 from '../Tab/MutualFundStep2';
import MutualFundTransaction from '../Transaction/MutualFundTransaction';
import RightBox from "../Rightbox/Rightbox";
import { Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import { Link } from "react-router-dom";
import AlertWarning from "../Tools/Alert/Alert_Warning";
import { FormattedMessage } from 'react-intl';

class MutualFund extends Component {

    constructor(props) {
        super(props);
        this.state = {
          key: 1,
          show: true,
          disabled:true
        };
       this.handleSelect = this.handleSelect.bind(this);
       this.handleShow = this.handleShow.bind(this);
    }

    handleSelect(key) {
        // alert('selected ' + key);
        this.setState({key});
        if(key != 1){
            this.setState({disabled:false});
        }else{
            this.setState({disabled:true});
        }
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    render() {
        let module = null;
        let moduleAlert = null;
        // let moduleLink = <MutualFundStep3 />;
        if(this.state.key !=1){
            module= <Button className="back" onClick={()=>this.handleSelect(1)}><FormattedMessage id='invest_mutualfund.back' /></Button>     
            moduleAlert = <AlertWarning />           
        }

        if (this.state.key==3) {
            return (<Redirect to={'/mutualFund/transaction'}/>)
        }
        return (
        <div>
            <section>
            {moduleAlert}
                <div className="row">
                    <div className='well col-sm-9 div-border'>
                        <h1><FormattedMessage id='invest_mutualfund.title' /> </h1>        
                            <div>
                                <Tabs activeKey={this.state.key} onSelect={this.handleSelect} animation={false} id="noanim-tab-example">
                                    <Tab eventKey={1} title={<FormattedMessage id='invest_mutualfund.tab1' />}>
                                        <MutualFundStep1 />
                                    </Tab>
                                    <Tab eventKey={2} title={<FormattedMessage id='invest_mutualfund.tab2' />} disabled={this.state.disabled}>
                                        <MutualFundStep2 />
                                    </Tab>
                                </Tabs>
                            </div>
                            <div className="row btnStyle">
                                {module}
                                <Button className="accept" onClick={()=>
                                {
                                    if(this.state.key==2){
                                        this.handleSelect(3)
                                    }else{
                                        this.handleSelect(2);
                                    }
                                    }}><FormattedMessage id='invest_mutualfund.accept' /></Button>
                                <Button className="cancel"><Link to="/account"><FormattedMessage id='invest_mutualfund.cancel' /></Link></Button>
                            </div>
                    </div>  
                    <div className='col-sm-3'>
                        <RightBox location = {this.props.location}/>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default MutualFund;