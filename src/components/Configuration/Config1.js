import React, {Component} from 'react';
import './Config.css';
import { Table, Button, Checkbox, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import AlertSuccess from '../Tools/Alert/Alert_Success';
import { FormattedMessage } from 'react-intl';

class Config1 extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            value: '',
        };
    }

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
        return (
            <section>
                {moduleAlert}
            <div className="row">
                <div className='col-sm-12'>
                    <div>
                        <div className="wizard-form-title">
                        <h5><FormattedMessage id='configuration.tab1.title' /></h5>
                        </div>
                        <div className="well col-sm-12">
                            <form>
                            <div>
                                <FormattedMessage id='configuration.tab1.label1' />
                            </div>
                            <Radio name="radioGroup" defaultChecked>
                                <FormattedMessage id='configuration.tab1.value1' /><br/><FormattedMessage id='configuration.tab1.value11' />
                            </Radio>
                            <Radio name="radioGroup">
                                <FormattedMessage id='configuration.tab1.value2' /><br/><FormattedMessage id='configuration.tab1.value22' />
                            </Radio>
                            <hr />
                            <div>
                                <FormattedMessage id='configuration.tab1.table.title1' />
                            </div><br />
                            <ControlLabel>
                                <FormattedMessage id='configuration.tab1.table.title2' />
                            </ControlLabel>
                            <Table bordered condensed hover className="tableAlign">
                                <thead>
                                    <tr>
                                    <th><FormattedMessage id='configuration.tab1.table.head1' /></th>
                                    <th><FormattedMessage id='configuration.tab1.table.head2' /></th>
                                    <th><FormattedMessage id='configuration.tab1.table.head3' /></th>
                                    <th><FormattedMessage id='configuration.tab1.table.head4' /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td><FormattedMessage id='configuration.tab1.table.account1' /></td>
                                    <td><FormControl
                                        type="text"
                                        value={this.state.value}
                                        placeholder=""
                                        onChange={this.handleChange}
                                    />
                                    </td>
                                    <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
                                    <td className="alignCenter"><Checkbox defaultChecked className="backColor"></Checkbox></td>
                                    </tr>
                                    <tr>
                                    <td><FormattedMessage id='configuration.tab1.table.account2' /></td>
                                    <td><FormControl
                                        type="text"
                                        value={this.state.value}
                                        placeholder=""
                                        onChange={this.handleChange}
                                    />
                                    </td>
                                    <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
                                    <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
                                    </tr>
                                    <tr>
                                    <td><FormattedMessage id='configuration.tab1.table.account3' /></td>
                                    <td><FormControl
                                        type="text"
                                        value={this.state.value}
                                        placeholder=""
                                        onChange={this.handleChange}
                                    />
                                    </td>
                                    <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
                                    <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
                                    </tr>
                                    <tr>
                                    <td><FormattedMessage id='configuration.tab1.table.account4' /></td>
                                    <td><FormControl
                                        type="text"
                                        value={this.state.value}
                                        placeholder=""
                                        onChange={this.handleChange}
                                    />
                                    </td>
                                    <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
                                    <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
                                    </tr>
                                </tbody>
                            </Table>
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

export default Config1;