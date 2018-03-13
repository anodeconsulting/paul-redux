import React, {Component} from 'react';
import './Statement.css';
import { Table, Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";



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
    
        return (
            <section>
            
          </section>
            
        );
    }
}

export default Offer;