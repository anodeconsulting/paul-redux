import React, {Component} from 'react';
import './Tab.css';
import { Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

class TabPayStep2 extends Component {

    render() {
        return (
            <div>
                <div className="fontTop"><FormattedMessage id='pay_product.step2.text1' /></div>
                <div className="wizard-form-title">
                    <FormattedMessage id='pay_product.step2.text2' />    
                </div>
                <div className="col-sm-12">
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel><FormattedMessage id='pay_product.step2.formlabel1' /></ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel><FormattedMessage id='pay_product.step2.formvalue1' /></ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel><FormattedMessage id='pay_product.step2.formlabel2' /></ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel><FormattedMessage id='pay_product.step2.formvalue2' /> *** 0001</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel><FormattedMessage id='pay_product.step2.formlabel3' /></ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel><FormattedMessage id='pay_product.step2.formvalue3' /></ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Nombre Fondo Mutuo</ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>Proximidad Serie A</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Cuenta Fondo Mutuo</ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>Nueva</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Monto</ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>$ 1.000.000</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Fecha</ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>20/02/2018</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Email </ControlLabel>
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

export default TabPayStep2;