import React, {Component} from 'react';
import './Config.css';
import { HelpBlock, Button, Checkbox, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import AlertSuccess from '../Tools/Alert/Alert_Success';
import { FormattedMessage } from 'react-intl';

class Config2 extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            value: '',
        };
    }

    onChange(){}
    handleChange(){
        this.setState({ show: true});
        window.scrollTo(0,100);
    }


    render() {   
        let moduleAlert = null;
        if(this.state.show) {
            moduleAlert = <AlertSuccess />
        }

        if (this.state.key==2) {
            window.scrollTo(0,100);
        }
        const optionsRegion = ['RM-Región Metropolitana'];
        const optionsCiudad = ['Santiago'];
        const optionsLocalidad = ['Las Condes'];

        return (
            <section>
                {moduleAlert}
            <div className="row">
                <div className='col-sm-12'>
                    <div>
                        <div className="wizard-form-title">
                        <h5> <FormattedMessage id='configuration.tab2.title1' /> </h5>
                        </div>
                        <div className="well col-sm-12">
                            <form>
                            <div>
                                <FormattedMessage id='configuration.tab2.title2' />
                            </div><br />
                            <ControlLabel><FormattedMessage id='configuration.tab2.title3' /></ControlLabel><br />
                            <FormGroup
                            controlId="formBasicText"
                            >
                            <ControlLabel><FormattedMessage id='configuration.tab2.label1' /></ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="987788900"
                                onChange={this.handleChange}
                            />
                            <HelpBlock><FormattedMessage id='configuration.tab2.value1' /> (e.g. 9xxxxxxxx)</HelpBlock>

                            <ControlLabel><FormattedMessage id='configuration.tab2.label2' /></ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="987788900"
                                onChange={this.handleChange}
                            />
                            </FormGroup>
                            <hr />
                            <div>
                                <FormattedMessage id='configuration.tab2.title4' />
                            </div><br />
                            <ControlLabel>
                                <FormattedMessage id='configuration.tab2.title5' />
                            </ControlLabel><br />
                            <FormGroup
                            controlId="formBasicText"
                            >
                            <ControlLabel><FormattedMessage id='configuration.tab2.label3' /></ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="henri.ramos@xyz.com"
                                onChange={this.handleChange}
                            />
                            <ControlLabel><FormattedMessage id='configuration.tab2.label4' /></ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="henri.ramos@xyz.com"
                                onChange={this.handleChange}
                            />
                            </FormGroup>
                            <hr />
                            <div>
                                <FormattedMessage id='configuration.tab2.form.title' />
                            </div><br />
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <ControlLabel><FormattedMessage id='configuration.tab2.form.region' /><span className="RUIFW-red"> *</span></ControlLabel>
                                    <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select">
                                    {optionsRegion.map((option,index) => {
                                        return <option value={option} key={index} ><FormattedMessage id={'configuration.tab2.form.region'+(index+1)} /></option>
                                    })}    
                                    </FormControl> 
                                </div>
                                <div className="form-group col-md-4">
                                    <ControlLabel><FormattedMessage id='configuration.tab2.form.country' /><span className="RUIFW-red"> *</span></ControlLabel>
                                    <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select">
                                    {optionsCiudad.map((option,index) => {
                                        return <option value={option} key={index} ><FormattedMessage id={'configuration.tab2.form.country'+(index+1)} /></option>
                                    })}    
                                    </FormControl> 
                                </div>
                                <div className="form-group col-md-4">
                                    <ControlLabel><FormattedMessage id='configuration.tab2.form.location' /><span className="RUIFW-red"> *</span></ControlLabel>
                                    <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChange.bind(this)}>
                                    {optionsLocalidad.map((option,index) => {
                                        return <option value={option} key={index} ><FormattedMessage id={'configuration.tab2.form.location'+(index+1)} /></option>
                                    })}    
                                    </FormControl> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <ControlLabel><FormattedMessage id='configuration.tab2.form.city' /><span className="RUIFW-red"> *</span></ControlLabel>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="VATA" />
                                </div>
                                <div className="form-group col-md-6">
                                    <ControlLabel><FormattedMessage id='configuration.tab2.form.number' /><span className="RUIFW-red"> *</span></ControlLabel>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <ControlLabel><FormattedMessage id='configuration.tab2.form.information' /></ControlLabel>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <ControlLabel><FormattedMessage id='configuration.tab2.form.zip' /></ControlLabel>
                                    <input type="text" className="form-control" id="inputCity" placeholder="15.352.719-9"/>
                                </div>
                            </div>
                            <div>
                                <span className="RUIFW-red">* </span><ControlLabel> <FormattedMessage id='configuration.tab2.form.obligate' /></ControlLabel>  
                            </div>
                            <div className="row btnStyle">
                                <Button className="accept" onClick={this.handleChange.bind(this)}><FormattedMessage id='configuration.accept' /></Button>
                                <Button className="cancel"><Link to="/account"><FormattedMessage id='configuration.cancel' /></Link></Button>
                            </div>                     
                         </form>                  
                        </div>                    
                    </div>                          
                </div>  
            </div>
          </section>
            
        );
    }
}

export default Config2;