import React, {Component} from 'react';
import './Tab.css';
import { Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

class MutualFundStep2 extends Component {

    render() {
        return (
            <div>
                <div className="fontTop"><FormattedMessage id='invest_mutualfund.step2.title1' /></div>
                <div className="wizard-form-title">
                <FormattedMessage id='invest_mutualfund.step2.title2' />    
                </div>
                <div className="col-sm-12">
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.label1' /></ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.value1' /></ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.label2' /></ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.value2' /></ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.label3' /></ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.value3' /></ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.label4' /></ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.value4' /></ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.label5' /></ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.value5' /></ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.label6' /></ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>$ 1.000.000</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.label7' /></ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>20/02/2018</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel><FormattedMessage id='invest_mutualfund.step2.label8' /> </ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>henrik.ramos@gmail.com</ControlLabel>
                            </div>
                    </div>
                </div>       
            </div>
        );
    }
}

export default MutualFundStep2;