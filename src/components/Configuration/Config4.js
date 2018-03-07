import React, {Component} from 'react';
import './Config.css';
import { Table, Button, Checkbox, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
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
                            <h5>Habilitación Compras WebPay Plus</h5>
                        </div>
                        <div className="well col-sm-12">
                            <form>
                            <ControlLabel>
                                Habilita o deshabilita la posibilidad de que puedas comprar con tus tarjetas titulares o adicionales en comercios adheridos a WebPay Plus.
                            </ControlLabel><br />
                            <h5>Tarjetas Titulares</h5>
                            <Table bordered condensed hover className="tableAlign">
                                <thead>
                                    <tr>
                                    <th>Número de Tarjeta</th>
                                    <th>Tipo de Tarjeta</th>
                                    <th>Habilitado para Comprar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <ControlLabel>*** 0084</ControlLabel>
                                        </td>
                                        <td>
                                            <ControlLabel>Crédito</ControlLabel>
                                        </td>
                                        <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ControlLabel>*** 0099</ControlLabel>
                                        </td>
                                        <td>
                                            <ControlLabel>Débito</ControlLabel>
                                        </td>
                                        <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ControlLabel>*** 0080</ControlLabel>
                                        </td>
                                        <td>
                                            <ControlLabel>Crédito</ControlLabel>
                                        </td>
                                        <td className="alignCenter"><Checkbox defaultChecked></Checkbox></td>
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