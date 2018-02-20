import React, {Component} from 'react';
import './Tab.css';
import { Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
 
class MutualFundStep1 extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            selectedDate: new Date().toISOString(),
            value: "inversión",
            valueA: "Cuenta Corriente *** 0001 $ 2,000.120",
            valueB: "Deuda de Corto Plazo",
            valueC: "Proximidata Serie A"       
        };

        // This binding is necessary to make `this` work in the callback
        this.handleLog = this.handleLog.bind(this);
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleLog(date) {
		this.setState({
			selectedDate: date
		});
    }
    
    handleSelect(key) {
        alert('selected ' + key);
        this.setState({key});
      }

    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }


    onChangeA(e) {
        this.setState({
            valueA: e.target.value
        })
    }

    onChangeB(e) {
        this.setState({
            valueB: e.target.value
        })
    }

    render() {

        const options = ["inversión",
                         "Rescate"
                        ];   
        const optionsA = [
                        "Cuenta Corriente *** 0001 $ 2,000.120",
                        "Cuenta Corriente *** 0002 USD 10,000.00"                       
                        ];
        const optionsB = ["Deuda de Corto Plazo",
                        "Deuda De Mediano y Largo Plazo",  
                        "Balanceados o Gestionados",
                        "Accionarios Nacionales e Internacionales"           
                        ];
        const optionsC = ["Proximidata Serie A",
                         "Proximidata Serie B",  
                         "Valoriza"          
                        ];
        const optionsD = ["Nueva",
                        "001",  
                        "002"          
                       ];
        const optionsa = [
                        "Clipper Series A $ 3.358.715",
                        "Proximidad Serie A $ 2.000.000", 
                        "Optimo Serie A $ 3.255.951",
                        "Valoriza Serie A $ 2.608.434",  
                        "Scotia Mixto Serie A $ 1.389.037"                    
                        ];
        const optionsb = ["001 - $ 1.000.000",
                        "002 - $ 1.000.000",  
                        "003 - $ 1.000.000"
                        ];
        const optionsc = ["Parcual",
                        "Total"   
                        ];       
        const optionsd = ["Cuenta Corriente *** 0001 $ 2.000.120",
                        "Cuenta Corriente *** 0002 $ 2.000.120"   
                        ];
        let module = null;
        let module1 = null;
        
        if("inversión" === this.state.value){
            module=
             <div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel>De</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeA.bind(this)}>
                        {optionsA.map(option => {
                            return <option value={option} key={option} >{option}</option>
                        })}    
                        </FormControl>        
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel>Nombre Fondo Mutuo</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsC.map(option => {
                            return <option value={option} key={option} >{option}</option>
                        })}    
                        </FormControl>        
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel>Tipo de Fondo</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsB.map(option => {
                            return <option value={option} key={option} >{option}</option>
                        })}    
                        </FormControl>
                        <ControlLabel className="labelSet">Conozca aquí las características de los Fondos disponibles</ControlLabel>        
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel>Cuenta Fondo Mutuo</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsD.map(option => {
                            return <option value={option} key={option} >{option}</option>
                        })}    
                        </FormControl> 
                        <ControlLabel className="labelSet">Conozca aquí los costos asociados a la inversión</ControlLabel>       
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel>Monto</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <div className="col-sm-8 pushToLeft20">
                            <FormControl
                            type="text"
                                value={this.state.valueText}
                                placeholder=""
                                onChange={this.handleChange}
                            /> 
                        </div>
                        <div className="col-sm-4 pushToLeft90">
                            <FormControl componentClass="select" placeholder="select" disabled>
                                <option>$</option>   
                            </FormControl>
                        </div> 
                    </div>
                </div>
                <div className="col-sm-12 pushBot">
                         <div className="col-sm-3">
                             <ControlLabel>Fecha</ControlLabel>
                         </div>
                         <div className="col-sm-9">
                         <ControlLabel>19/02/2018</ControlLabel>  
                         </div>
                </div>
            </div>;
        }else{
            module=
             <div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel>Nombre Fondo Mutuo</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeA.bind(this)}>
                        {optionsa.map(option => {
                            return <option value={option} key={option} >{option}</option>
                        })}    
                        </FormControl>        
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel>Cuenta Fondo Mutuo</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsb.map(option => {
                            return <option value={option} key={option} >{option}</option>
                        })}    
                        </FormControl> 
                        <ControlLabel className="labelSet">Cuotas: 250.3412</ControlLabel>               
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel>Tipo de Rescate</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsc.map(option => {
                            return <option value={option} key={option} >{option}</option>
                        })}    
                        </FormControl>
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel>Monto/Cuotas</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <div className="col-sm-8 pushToLeft20">
                            <FormControl
                            type="text"
                                value={this.state.valueText}
                                placeholder=""
                                onChange={this.handleChange}
                            /> 
                        </div>
                        <div className="col-sm-4 pushToLeft90">
                            <FormControl componentClass="select" placeholder="select">
                                <option>$</option>   
                                <option>Cuotas</option>
                            </FormControl>
                        </div> 
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel>A</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsd.map(option => {
                            return <option value={option} key={option} >{option}</option>
                        })}    
                        </FormControl> 
                    </div>
                </div>
                
                <div className="col-sm-12 pushBot">
                         <div className="col-sm-3">
                             <ControlLabel>Fecha</ControlLabel>
                         </div>
                         <div className="col-sm-9">
                            <ControlLabel>19/02/2018</ControlLabel>
                         </div>
                </div>
            </div>;
        
        }
        
    
        return (
            <div>
                <div className="fontTop">Ingresa los datos para Invertir o Rescatar tu Fondo Mutuo</div>
                <div className="wizard-form-title">
                Selecciona o ingresa los datos solicitados para efectuar la inversión o el rescate de tu inversión y luego haz clic en "Aceptar" para continuar. Fondos mutuos se pueden tomar solamente con cargo a cuentas en la misma moneda y del mismo titular de la inversión.    
                </div>
                <div className="col-sm-12">
                    <div className="col-sm-12 pushBot">
                        <div className="col-sm-3">
                            <ControlLabel>Movimiento</ControlLabel>
                        </div>
                        <div className="col-sm-9">
                            <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChange.bind(this)}>
                            {options.map(option => {
                                return <option value={option} key={option} >{option}</option>
                            })}
                            </FormControl>              
                        </div>
                        
                    </div>
                    {module}
                    
                </div>       
            </div>
        );
    }
}

export default MutualFundStep1;