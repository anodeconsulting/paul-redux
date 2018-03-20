import React, {Component} from 'react';
import './Config.css';
import { Table, Button, Checkbox, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
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
                            <h5><FormattedMessage id='configuration.tab3.title' /></h5>
                        </div>
                        <div className="well col-sm-12">
                            <form>
                                <ControlLabel>
                                    <FormattedMessage id='configuration.tab3.table.title' />
                                </ControlLabel><br />
                                <Table bordered condensed hover className="tableAlign">
                                    <thead>
                                        <tr>
                                        <th><FormattedMessage id='configuration.tab3.table.head1' /></th>
                                        <th><FormattedMessage id='configuration.tab3.table.head2' /></th>
                                        <th><FormattedMessage id='configuration.tab3.table.head3' /></th>
                                        <th><FormattedMessage id='configuration.tab3.table.head4' /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td><FormattedMessage id='configuration.tab3.table.account1' /></td>
                                        <td>
                                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select">
                                        {options1.map((option,index) => {
                                            return <option value={option} key={index} ><FormattedMessage id={'configuration.tab3.table.status'+(index+1)} /></option>
                                        })}    
                                        </FormControl> 
                                        </td>
                                        <td>
                                            <span>
                                                <input type="text" className="form-control" id="input1" placeholder="$ 10000" />       
                                            </span>
                                        </td>
                                        <td>
                                            <input type="text" className="form-control" id="input1" placeholder="$ 500" />                                        
                                        </td>
                                        </tr>
                                        <tr>
                                        <td><FormattedMessage id='configuration.tab3.table.account2' /></td>
                                        <td>
                                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select">
                                        {options1.map((option,index) => {
                                            return <option value={option} key={index} ><FormattedMessage id={'configuration.tab3.table.status'+(index+1)} /></option>
                                        })}    
                                        </FormControl> 
                                        </td>
                                        <td>
                                        <input type="text" className="form-control" id="input2" placeholder="$ 20000" />       
                                        </td>
                                        <td>
                                            <input type="text" className="form-control" id="input1" placeholder="$ 600" />                                        
                                        </td>
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