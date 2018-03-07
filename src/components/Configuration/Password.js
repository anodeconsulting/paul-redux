import React, {Component} from 'react';
import './Config.css';
import { Tabs, Tab, Table, Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom';
import AlertSuccess from '../Tools/Alert/Alert_Success';

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
                    <h1>Configuración de Seguridad </h1>        
                    <div>
                        <Tabs animation={false} id="noanim-tab-example">
                            <Tab eventKey={1} title="Cambio de Contraseña">
                            <section>
                                <div className="row">
                                    <div className='col-sm-12'>
                                        <div>
                                            <div className="wizard-form-title">
                                            Para cambiar tu contraseña de acceso, ingresa tu contraseña actual y luego dos veces la nueva contraseña. Recuerda que tu contraseña debe tener un largo mínimo de 8 carácteres y máximo de 15, al menos una letra y un número.
                                            </div>
                                            <div className="well">
                                                <form>
                                                    <div className = "row">
                                                        <div className="col-sm-6">
                                                            <ControlLabel>
                                                            Ingresa tu Contraseña Actual
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
                                                            Ingresa tu Nueva Contraseña
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
                                                            Ingresa tu Contraseña Nuevamente para Confirmar
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
                            }}>Aceptar</Button>
                            <Button className="cancel"><Link to="/account">Cancelar</Link></Button>
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