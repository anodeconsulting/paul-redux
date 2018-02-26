import React, {Component} from 'react';
import './Tab.css';
import { Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
 
class TabPayStep2 extends Component {

    render() {
        return (
            <div>
                <div className="fontTop">Confirma los datos para invertir o rescatar tu Fondo Mutuo</div>
                <div className="wizard-form-title">
                Revisa la información, si es correcta haz click en el botón "Confirmar" para completar tu inversión. Si los datos no están correctos, haz click en el botón “Volver” y efectúa las correcciones necesarias.    
                </div>
                <div className="col-sm-12">
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Movimiento</ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>Inversión</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>De</ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>Cuenta Corriente *** 0001</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Tipo de Fondo</ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>Deuda de Corto Plazo</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Nombre Fondo Mutuo</ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>Proximidad Serie A</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Cuenta Fondo Mutuo</ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>Nueva</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Monto</ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>$ 1.000.000</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Fecha</ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>20/02/2018</ControlLabel>
                            </div>
                    </div>
                    <div className="col-sm-12 pushBot">
                            <div className="col-sm-3">
                                <ControlLabel>Email </ControlLabel>
                            </div>
                            <div className="col-sm-9">
                                <ControlLabel>henrik.ramos@gmail.com</ControlLabel>
                            </div>
                    </div>
                </div>       
            </div>
        );
    }
}

export default TabPayStep2;