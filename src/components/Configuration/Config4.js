import React, {Component} from 'react';
import './Config.css';
import { Table, Button, Checkbox, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import AlertSuccess from '../Tools/Alert/Alert_Success';
import { FormattedMessage } from 'react-intl';

class Config3 extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            value: '',
            show: false
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
    
        const options1 = ['Desbloqueada','Bloqueada'];  
        return (
            <section>
            {moduleAlert}
            <div className="row">
                <div className='col-sm-12'>
                    <div>
                        <div className="wizard-form-title">
                            <h5><FormattedMessage id='configuration.tab4.title' /></h5>
                        </div>
                        <div className="well col-sm-12">
                            <form>
                            <ControlLabel>
                                <FormattedMessage id='configuration.tab4.table.title' />
                            </ControlLabel><br />
                            <h5><FormattedMessage id='configuration.tab4.table.label' /></h5>
                            <Table bordered condensed hover className="tableAlign">
                                <thead>
                                    <tr>
                                    <th><FormattedMessage id='configuration.tab4.table.head1' /></th>
                                    <th><FormattedMessage id='configuration.tab4.table.head2' /></th>
                                    <th><FormattedMessage id='configuration.tab4.table.head3' /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <ControlLabel>*** 0084</ControlLabel>
                                        </td>
                                        <td>
                                            <ControlLabel><FormattedMessage id='configuration.tab4.table.credit' /></ControlLabel>
                                        </td>
                                        <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ControlLabel>*** 0099</ControlLabel>
                                        </td>
                                        <td>
                                            <ControlLabel><FormattedMessage id='configuration.tab4.table.debut' /></ControlLabel>
                                        </td>
                                        <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ControlLabel>*** 0080</ControlLabel>
                                        </td>
                                        <td>
                                            <ControlLabel><FormattedMessage id='configuration.tab4.table.credit' /></ControlLabel>
                                        </td>
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

export default Config3;