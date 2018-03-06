import React, {Component} from 'react';
import './Config.css';
import { Table, Button, Checkbox, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import AlertSuccess from '../Tools/Alert/Alert_Success';

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
                            <h5>Administración de Cupos para Tarjetas Adicionales</h5>
                        </div>
                        <div className="well col-sm-12">
                            <form>
                                <ControlLabel>
                                    Modifica los cupos en pesos y dólar para tus Tarjetas de Crédito Adicionales
                                </ControlLabel><br />
                                <Table bordered condensed hover className="tableAlign">
                                    <thead>
                                        <tr>
                                        <th>Tarjeta</th>
                                        <th>Estado</th>
                                        <th>Cupo Nacional</th>
                                        <th>Cupo Internacional</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Tarjeta de Crédito Alexis *** 0081</td>
                                        <td>
                                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select">
                                        {options1.map(option => {
                                            return <option value={option} key={option} >{option}</option>
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
                                        <td>Tarjeta de Crédito Sam *** 0085</td>
                                        <td>
                                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select">
                                        {options1.map(option => {
                                            return <option value={option} key={option} >{option}</option>
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
                                    <Button className="accept" onClick={this.handleChange.bind(this)}>Aceptar</Button>
                                    <Button className="cancel"><Link to="/account">Cancelar</Link></Button>
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