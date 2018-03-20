import React, {Component} from 'react';
import './Config.css';
import { Tabs, Tab, Table, Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom';
import AlertSuccess from '../Tools/Alert/Alert_Success';
import { FormattedMessage } from 'react-intl';

class Password extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            key: 1,
            show: false
        };
        // window.scrollTo(0,100);
    }

    handleSelect(){
        this.setState({ key:2 });
        this.setState({ show: true});
    }

    render() { 
        let moduleAlert = null;
        if(this.state.show) {
            moduleAlert = <AlertSuccess />
        }

        if (this.state.key==2) {
            window.scrollTo(0,100);
        }
    
        return ( 
            <div>      
            <section>
            {moduleAlert} 
            <div className="row">               
                <div className='col-sm-9'>                    
                    <h1><FormattedMessage id='password.title1' /> </h1>        
                    <div>
                        <Tabs animation={false} id="noanim-tab-example">
                            <Tab eventKey={1} title={<FormattedMessage id='password.tab' />}>
                            <section>
                                <div className="row">
                                    <div className='col-sm-12'>
                                        <div>
                                            <div className="wizard-form-title">
                                            <FormattedMessage id='password.title2' />
                                            </div>
                                            <div className="well">
                                                <form>
                                                    <div className = "row">
                                                        <div className="col-sm-6">
                                                            <ControlLabel>
                                                            <FormattedMessage id='password.label1' />
                                                            </ControlLabel>
                                                            <FormControl
                                                                type="text"
                                                                value={this.state.value}
                                                                placeholder=""
                                                                onChange={this.handleChange}
                                                            />
                                                        </div>
                                                    </div><br />
                                                    <div className = "row">
                                                        <div className="col-sm-6">
                                                            <ControlLabel>
                                                            <FormattedMessage id='password.label2' />
                                                            </ControlLabel>
                                                            <FormControl
                                                                type="text"
                                                                value={this.state.value}
                                                                placeholder=""
                                                                onChange={this.handleChange}
                                                            />
                                                        </div>
                                                    </div><br />
                                                    <div className = "row">
                                                        <div className="col-sm-6">
                                                            <ControlLabel>
                                                            <FormattedMessage id='password.label3' />
                                                            </ControlLabel>
                                                            <FormControl
                                                                type="text"
                                                                value={this.state.value}
                                                                placeholder=""
                                                                onChange={this.handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section> 
                            </Tab>
                        </Tabs>
                    </div>  
                    <div className="row btnStyle">
                            <Button className="accept" onClick={()=>
                            {
                              this.handleSelect(2)                                                               
                            }}><FormattedMessage id='password.accept' /></Button>
                            <Button className="cancel"><Link to="/account"><FormattedMessage id='password.cancel' /></Link></Button>
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

export default Password;