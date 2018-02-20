import React, {Component} from 'react';
import './Tab.css';
import { Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';

class TabPayStep1 extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            value: 'Selecciona cuenta de oirgen',
            valueA: 'Selecciona cuenta de oirgen',
            valueB: 'BCI'
        };
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
        const users = [];
        users.push({
            name: 'LEONEL',
            rut: '11.000.000-k',
            bank: 'Banco de Chile',
            phone:'123456683',
            Email:'qwert@scotiabank.com'          
        });
        users.push({
            name: 'CARLOS',
            rut: '11.000.000-k',
            bank: 'Scotiabank',
            phone:'564534362',
            Email:'qwert@scotiabank.com'          
        });

        const options = ["Selecciona cuenta de oirgen",
                        "Cuenta Corriente *** 0001 - $ 2.222.345",
                        "Cuenta Corriente *** 0002 - $ 3.231.456",
                        "Cuenta de Ahorro *** 0003",
                        "Tarjeta de Crédito *** 0008",
                        "Otro Banco"
                    ];   
        const optionsA = ["Selecciona cuenta de oirgen",
                        "Tarjeta de Crédito *** 0008",
                        "Crédito *** 0009",
                        "Crédito Hipotecario *** 0010",
                        "CAE Arancel Cuotas *** 0011",
                        "CAE Comisión Cuotas *** 0011",
                        "Crédito Educación *** 0013"
                    ];
        const optionsB = ["BCI",
                        "Satander",               
                    ];
        let module = null;
        let module1 = null;
        let module2 = null;
        let module2_1 = null;
        let module3 = null;
        if("Cuenta Corriente *** 0001 - $ 2.222.345" === this.state.value){
            module=<ControlLabel className="labelSet">Línea de Crédito *** 0007 $ 33.445</ControlLabel>;
        }else if("Otro Banco" === this.state.value){
            module1=
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel>Banco</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsB.map(option => {
                            return <option value={option} key={option} >{option}</option>
                        })}    
                        </FormControl>        
                    </div>
                </div>;
        }
        if("Tarjeta de Crédito *** 0008" === this.state.valueA){
            module2 = 
            <div>
            <div className="col-sm-12 pushBot">
                <div className="col-sm-3">
                    <ControlLabel>Región</ControlLabel>
                </div>
                <div className="col-sm-9">
                <FormGroup>
                    <Radio name="radioGroup1" inline checked disabled>
                        Nacionales
                    </Radio>
                    <Radio name="radioGroup1" inline disabled>
                        Internacionales
                    </Radio>                          
                </FormGroup>
                    
                </div>
            </div>
            <div className="col-sm-12">
                <div className="col-sm-3">
                    <ControlLabel>Monto</ControlLabel>
                </div>
                <div className="col-sm-9">
                <FormGroup>
                    <Radio name="radioGroup" checked >
                    Monto Facturado ($ 123.456)
                    </Radio>{' '}
                    <Radio name="radioGroup"  >
                    Pago Mínimo ($ 3.456)
                    </Radio> {' '} 
                    <Radio name="radioGroup"  >
                    Deuda Total ($ 340.456)
                    </Radio> {' '} 
                    <Radio name="radioGroup"  >
                    Otro Monto
                    </Radio>                          
                </FormGroup>    
                </div>
            </div>
            <div className="col-sm-12">
                <div className="col-sm-3">
                    <ControlLabel>Fecha</ControlLabel>
                </div>
                <div className="col-sm-9">
                <ControlLabel>19/02/2018</ControlLabel>  
                </div>
            </div>
            </div>;
        }else if("Crédito *** 0009"=== this.state.valueA || "Crédito Hipotecario *** 0010" ===this.state.valueA){
            module2 = 
            <div>
                <div className="col-sm-12 pushBot">
                    <div className="col-sm-3">
                        <ControlLabel>Monto</ControlLabel>
                    </div>
                    <div className="col-sm-9">
                    <ControlLabel>$ 122.000</ControlLabel>  
                    </div>
                </div>
                <div className="col-sm-12">
                <div className="col-sm-3">
                    <ControlLabel>Fecha</ControlLabel>
                </div>
                <div className="col-sm-9">
                <ControlLabel>19/02/2018</ControlLabel>  
                </div>
                </div>
            </div>;
        }else{
            if("Selecciona cuenta de oirgen"!= this.state.valueA ) {
                if("Crédito Educación *** 0013" != this.state.valueA ) {
                    module2_1=
                     <ControlLabel className="labelSet">Para ver más información haga clic aquí</ControlLabel>;
                 }
                 module2 = 
                 <div>
                     <div className="col-sm-12 pushBot">
                         <div className="col-sm-3">
                             <ControlLabel>Tipo de Pago</ControlLabel>
                         </div>
                         <div className="col-sm-9">
                             <Radio name="radioGroup2" inline defaultChecked>
                                 Cuota
                             </Radio>
                             <Radio name="radioGroup2" inline>
                                 Prepago
                             </Radio>  
                         </div>
                     </div>
                     <div className="col-sm-12">
                         <div className="col-sm-3">
                             <ControlLabel>Monto</ControlLabel>
                         </div>
                         <div className="col-sm-9">
                         <ControlLabel>$ 122.000</ControlLabel>  
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
                 </div>
            }
           
        }
    
        return (
            <div>
                <div className="wizard-form-title">
                    Desde esta página puedes  transferir dinero a una persona en Scotiabank o en otro banco.    
                </div>
                <div className="well col-sm-12">
                    <div className="col-sm-12 pushBot">
                        <div className="col-sm-3">
                            <ControlLabel>De</ControlLabel>
                        </div>
                        <div className="col-sm-9">
                            <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChange.bind(this)}>
                            {options.map(option => {
                                return <option value={option} key={option} >{option}</option>
                            })}
                                
                            </FormControl>
                            {module}
                        </div>
                        
                    </div>
                    {module1}
                    <div className="col-sm-12">
                        <div className="col-sm-3">
                            <ControlLabel>A</ControlLabel>
                        </div>
                        <div className="col-sm-9">
                            <FormControl value={this.state.valueA} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeA.bind(this)}>
                            {optionsA.map(option => {
                                return <option value={option} key={option} >{option}</option>
                            })}
                            </FormControl>
                            {module2_1}
                        </div>
                    </div>
                    {module2}
                    
                    <span className="pushBot">
                        <Button className="cancel">Cancelar</Button>
                        <Button className="accept">Aceptar</Button>
                    </span>
                    
                </div>       
            </div>
        );
    }
}

export default TabPayStep1;