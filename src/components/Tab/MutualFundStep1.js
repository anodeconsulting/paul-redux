import React, {Component} from 'react';
import './Tab.css';
import { Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

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
                        <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label2' /></ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeA.bind(this)}>
                        {optionsA.map((option,index) => {
                            return <option value={option} key={index} ><FormattedMessage id={'invest_mutualfund.step1.valuelist2'+(index+1)} /></option>
                        })}    
                        </FormControl>        
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label3' /></ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsC.map((option,index) => {
                            return <option value={option} key={index} ><FormattedMessage id={'invest_mutualfund.step1.valuelist3'+(index+1)} /></option>
                        })}    
                        </FormControl>        
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label4' /></ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsB.map((option,index) => {
                            return <option value={option} key={index} ><FormattedMessage id={'invest_mutualfund.step1.valuelist4'+(index+1)} /></option>
                        })}    
                        </FormControl>
                        <ControlLabel className="labelSet">
                            <FormattedMessage id='invest_mutualfund.step1.value45' />
                        </ControlLabel>        
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label5' /></ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsD.map((option,index) => {
                            return <option value={option} key={index} ><FormattedMessage id={'invest_mutualfund.step1.valuelist5'+(index+1)} /></option>
                        })}    
                        </FormControl> 
                        <ControlLabel className="labelSet"><FormattedMessage id='invest_mutualfund.step1.value55' /></ControlLabel>       
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label8' /></ControlLabel>
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
                        {/* <div className="col-sm-4 pushToLeft90">
                            <FormControl componentClass="select" placeholder="select" disabled>
                                <option>$</option>   
                            </FormControl>
                        </div>  */}
                    </div>
                </div>
                <div className="col-sm-12 pushBot">
                         <div className="col-sm-3">
                             <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label9' /></ControlLabel>
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
                        <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label10' /></ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeA.bind(this)}>
                        {optionsa.map((option,index) => {
                            return <option value={option} key={index} ><FormattedMessage id={'invest_mutualfund.step1.valuelist10'+(index+1)} /></option>
                        })}    
                        </FormControl>        
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label11' /></ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsb.map((option,index) => {
                            return <option value={option} key={index} ><FormattedMessage id={'invest_mutualfund.step1.valuelist11'+(index+1)} /></option>
                        })}    
                        </FormControl> 
                        <ControlLabel className="labelSet"><FormattedMessage id='invest_mutualfund.step1.label12' />: 250.3412</ControlLabel>               
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label13' /></ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsc.map((option,index) => {
                            return <option value={option} key={index} ><FormattedMessage id={'invest_mutualfund.step1.valuelist13'+(index+1)} /></option>
                        })}    
                        </FormControl>
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label14' /></ControlLabel>
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
                        {/* <div className="col-sm-4 pushToLeft90">
                            <FormControl componentClass="select" placeholder="select">
                                <option>$</option>   
                                <option>Cuotas</option>
                            </FormControl>
                        </div>  */}
                    </div>
                </div>
                <div className="col-sm-12 pushLeft">
                    <div className="col-sm-3">
                        <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label15' /></ControlLabel>
                    </div>
                    <div className="col-sm-9">
                        <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChangeB.bind(this)}>
                        {optionsd.map((option,index) => {
                            return <option value={option} key={index} ><FormattedMessage id={'invest_mutualfund.step1.valuelist15'+(index+1)} /></option>
                        })}    
                        </FormControl> 
                    </div>
                </div>
                
                <div className="col-sm-12 pushBot">
                         <div className="col-sm-3">
                             <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label16' /></ControlLabel>
                         </div>
                         <div className="col-sm-9">
                            <ControlLabel>19/02/2018</ControlLabel>
                         </div>
                </div>
            </div>;
        
        }
        
    
        return (
            <div>
                <div className="fontTop"><FormattedMessage id='invest_mutualfund.step1.title1' /></div>
                <div className="wizard-form-title">
                <FormattedMessage id='invest_mutualfund.step1.title2' />    
                </div>
                <div className="col-sm-12">
                    <div className="col-sm-12 pushBot">
                        <div className="col-sm-3">
                            <ControlLabel><FormattedMessage id='invest_mutualfund.step1.label1' /></ControlLabel>
                        </div>
                        <div className="col-sm-9">
                            <FormControl className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChange.bind(this)}>
                            {options.map((option,index) => {
                                return <option value={option} key={index} ><FormattedMessage id={'invest_mutualfund.step1.valuelist1'+(index+1)} /></option>
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