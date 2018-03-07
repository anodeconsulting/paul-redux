import React, {Component} from 'react';
import './Config.css';
import { HelpBlock, Button, Checkbox, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import AlertSuccess from '../Tools/Alert/Alert_Success';

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
                        <h5> Datos de Contacto </h5>
                        </div>
                        <div className="well col-sm-12">
                            <form>
                            <div>
                                Actualización de Número Telefónico
                            </div><br />
                            <ControlLabel>Este dato nos permitirá contactarte para entregar información importante y comunicar ofertas disponibles vía telefónica o por mensajes de texto (SMS).</ControlLabel><br />
                            <FormGroup
                            controlId="formBasicText"
                            >
                            <ControlLabel>Número Teléfono Celular</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="987788900"
                                onChange={this.handleChange}
                            />
                            <HelpBlock>Número de 9 Dígitos (e.g. 9xxxxxxxx)</HelpBlock>

                            <ControlLabel>Reingresa el Número</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="987788900"
                                onChange={this.handleChange}
                            />
                            </FormGroup>
                            <hr />
                            <div>
                                Actualización de Correo Electrónico
                            </div><br />
                            <ControlLabel>
                                Este dato nos permitirá contactarte para entregar información importante y 
                                comunicar ofertas disponibles vía correo electrónico.
                            </ControlLabel><br />
                            <FormGroup
                            controlId="formBasicText"
                            >
                            <ControlLabel>Correo Electrónico</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="henri.ramos@xyz.com"
                                onChange={this.handleChange}
                            />
                            <ControlLabel>Reingresa el Correo Electrónico</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="henri.ramos@xyz.com"
                                onChange={this.handleChange}
                            />
                            </FormGroup>
                            <hr />
                            <div>
                                Actualización de Dirección
                            </div><br />
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <ControlLabel>Región<span className="RUIFW-red"> *</span></ControlLabel>
                                    <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select">
                                    {optionsRegion.map(option => {
                                        return <option value={option} key={option} >{option}</option>
                                    })}    
                                    </FormControl> 
                                </div>
                                <div className="form-group col-md-4">
                                    <ControlLabel>Ciudad o Comuna<span className="RUIFW-red"> *</span></ControlLabel>
                                    <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select">
                                    {optionsCiudad.map(option => {
                                        return <option value={option} key={option} >{option}</option>
                                    })}    
                                    </FormControl> 
                                </div>
                                <div className="form-group col-md-4">
                                    <ControlLabel>Ciudad o Comuna<span className="RUIFW-red"> *</span></ControlLabel>
                                    <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChange.bind(this)}>
                                    {optionsLocalidad.map(option => {
                                        return <option value={option} key={option} >{option}</option>
                                    })}    
                                    </FormControl> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <ControlLabel>Calle<span className="RUIFW-red"> *</span></ControlLabel>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="VATA" />
                                </div>
                                <div className="form-group col-md-6">
                                    <ControlLabel>Número<span className="RUIFW-red"> *</span></ControlLabel>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <ControlLabel>Información Adicional</ControlLabel>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <ControlLabel>Código Postal</ControlLabel>
                                    <input type="text" className="form-control" id="inputCity" placeholder="15.352.719-9"/>
                                </div>
                            </div>
                            <div>
                                <span className="RUIFW-red">* </span><ControlLabel> Obligatorio</ControlLabel>  
                            </div>
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

export default Config2;