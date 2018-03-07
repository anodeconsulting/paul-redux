import React, {Component} from 'react';
import './Config.css';
import { Table, Button, Checkbox, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import AlertSuccess from '../Tools/Alert/Alert_Success';

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
                        <h5>Opciones Generales de Configuración</h5>
                        </div>
                        <div className="well col-sm-12">
                            <form>
                            <div>
                                Configuración de Números de Producto
                            </div>
                            <Radio name="radioGroup" defaultChecked>
                                Ocultar<br/>(No se mostrará el número completo, por ejemplo: *** 5678)
                            </Radio>
                            <Radio name="radioGroup">
                                Mostrar<br/>(Se mostrará el número completo, por ejemplo: 7100 1668 8689)
                            </Radio>
                            <hr />
                            <div>
                                Configuración de Alias
                            </div><br />
                            <ControlLabel>
                                Esta opción te permitirá asociar un nombre (Alias) a tus productos. También puedes elegir ocultar algunos productos del Resumen de Productos en web o en banca móvil.
                            </ControlLabel>
                            <Table bordered condensed hover className="tableAlign">
                                <thead>
                                    <tr>
                                    <th>Producto</th>
                                    <th>Alias</th>
                                    <th>Mostrar en Web</th>
                                    <th>Mostrar en Banca Móvil</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Cuenta Corriente 0009 7091 2940</td>
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
                                    <td>Cuenta Corriente 0009 7091 2942</td>
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
                                    <td>Cuenta de Ahorro 3008 8635 1805</td>
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
                                    <td>Tarjeta de Crédito Visa 4966 7212 0000 7115</td>
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

export default Config1;