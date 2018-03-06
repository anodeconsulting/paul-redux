import React, {Component} from 'react';
import '../Pay/Pay.css';
import {Tabs, Tab, TabContainer, TabContent, TabPane} from 'react-bootstrap';
import TabAccountTransStep1 from '../Tab/TabAccountTransStep1';
import TabAccountTransStep2 from '../Tab/TabAccountTransStep2';
import RightBox from "../Rightbox/Rightbox";
import { Button, Alert } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import { Link } from "react-router-dom";
import AlertWarning from "../Tools/Alert/Alert_Warning";

class Pay extends Component {

    constructor(props) {
        super(props);
        this.state = {
          key: 1,
          show: true,
          disabled:true
        };
       this.handleSelect = this.handleSelect.bind(this);
       this.handleShow = this.handleShow.bind(this);
    //    window.scrollTo(0,100);
    }

    handleSelect(key) {
        // alert('selected ' + key);
        this.setState({key});
        if(key != 1){
            this.setState({disabled:false});
        }else{
            this.setState({disabled:true});
        }
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    render() {
        let module = null;
        let moduleAlert = null;
        if(this.state.key !=1){
            module= <Button className="back" onClick={()=>this.handleSelect(1)}>Volver</Button>     
            moduleAlert = <AlertWarning show={this.state.show}/>
            
        }

        if (this.state.key==3) {
            return (<Redirect to={'/transfer/transaction'}/>)
        }

        return (
        <div>
            <section>
                {moduleAlert}
                <div className="row">
                    <div className='col-sm-9 div-border'>
                        <h1>Transferencias entre Mis Cuentas </h1>        
                            <div>
                                <Tabs activeKey={this.state.key} onSelect={this.handleSelect} animation={false} id="noanim-tab-example">
                                    <Tab eventKey={1} title="1. Seleccionar Destino">
                                        <TabAccountTransStep1 />
                                    </Tab>
                                    <Tab eventKey={2} title="2. Confirmar" disabled={this.state.disabled}>
                                        <TabAccountTransStep2 />
                                    </Tab>
                                </Tabs>
                            </div>  
                            <div className="btnStyle row">
                                {module}
                                <Button className="accept" onClick={()=>
                                {
                                    if(this.state.key==2){
                                        this.handleSelect(3)
                                    }else{
                                        this.handleSelect(2);
                                    }
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

export default Pay;