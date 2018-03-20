import React, {Component} from 'react';
import './Statement.css';
import { Table, Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import myPdf02 from '../../assets/pdf/statement022016.pdf';
import myPdf03 from '../../assets/pdf/statement032016.pdf';
import myPdf05 from '../../assets/pdf/statement052016.pdf';
import myPdf06 from '../../assets/pdf/statement062016.pdf';
import { FormattedMessage } from 'react-intl';

class Statement extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            value: 'Cuenta Corriente *** 0001 - $ 2.222.345',
            valueA: 'Selecciona cuenta de oirgen',
            valueB: 'BCI',
        };
        window.scrollTo(0,100);
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

    handleClick(page){
        console.log(page);
        switch(page){
            case "02":
                window.open(myPdf02);
                break;
            case "03":
                window.open(myPdf03);
                break;
            case "05":
                window.open(myPdf05);
                break;
            case "06":
                window.open(myPdf06);
                break;
        }       
    }

    render() {
        const { value, valpageNumber, numPages } = this.state;
        const options = [
                        "Cuenta Corriente *** 0001 - $ 2.222.345",
                        "Cuenta Corriente *** 0002 - $ 3.231.456",
                        "Cuenta de Ahorro *** 0003",
                        "Tarjeta de Crédito *** 0008",
                        "Otro Banco"
                    ];   
    
        return (
            <section>
            <div className="row">
                <div className='col-sm-9 div-border'>
                    <h1><FormattedMessage id='statement.title1' /></h1>        
                        <div>
                        <div>
                <div className="wizard-form-title">
                <FormattedMessage id='statement.title2' />
                </div>
                <div className="well col-sm-12">
                        <div className="col-sm-12 form12">
                            <div className="col-sm-4">
                                <ControlLabel><FormattedMessage id='statement.label1' /></ControlLabel>
                            </div>
                            <div className="col-sm-8">
                                <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChange.bind(this)}>
                                {options.map((option,index) => {
                                    return <option value={option} key={index} ><FormattedMessage id={'statement.value1'+(index+1)} /></option>
                                })}
                                    
                                </FormControl>
                            </div>
                            
                        </div>
                        <div className="col-sm-12 form12">
                            <div className="col-sm-4">
                                <ControlLabel><FormattedMessage id='statement.label2' /></ControlLabel>
                            </div>
                            <div className="col-sm-8">
                            <FormattedMessage id='statement.label2' />
                            </div>
                        </div>
                        <div className="col-sm-12 form12">
                            <div className="col-sm-4">
                                <ControlLabel><FormattedMessage id='statement.label3' /></ControlLabel>
                            </div>
                            <div className="col-sm-8">
                            <FormattedMessage id='statement.label3' />
                            </div>
                        </div>
                    <div className="col-sm-12 table12">
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                            <th><FormattedMessage id='statement.label4' /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><a onClick={this.handleClick.bind(this,"06")}><span><FormattedMessage id='statement.june' /> 2016</span></a></td>
                            </tr>
                            <tr>
                            <td><a onClick={this.handleClick.bind(this,"05")}><span><FormattedMessage id='statement.may' /> 2016</span></a></td>
                            </tr>
                            <tr>
                            <td><span><FormattedMessage id='statement.april' /> 2016</span></td>
                            </tr>
                            <tr>
                            <td><a onClick={this.handleClick.bind(this,"03")}><span><FormattedMessage id='statement.march' /> 2016</span></a></td>
                            </tr>
                            <tr>
                            <td><a onClick={this.handleClick.bind(this,"02")}><span><FormattedMessage id='statement.feb' /> 2016</span></a></td>
                            </tr>
                            <tr>
                            <td><span><FormattedMessage id='statement.dec' /> 2015</span></td>
                            </tr>
                            <tr>
                            <td><span><FormattedMessage id='statement.nov' /> 2015</span></td>
                            </tr>
                        </tbody>
                        </Table>
                    </div>                  
                 </div>       
                 </div>
                </div>  
                             
                </div>  
                <div className='col-sm-3'>
                    <RightBox location = {this.props.location}/>
                </div>
            </div>
          </section>
            
        );
    }
}

export default Statement;