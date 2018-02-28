import React, {Component} from 'react';
import '../Pay/Pay.css';
import {Tabs, Tab, TabContainer, TabContent, TabPane} from 'react-bootstrap';
import TabAccountTransStep1 from '../Tab/TabAccountTransStep1';
import TabAccountTransStep2 from '../Tab/TabAccountTransStep2';
import RightBox from "../Rightbox/Rightbox";
import { Button, Alert } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import { Link } from "react-router-dom";

class Pay extends Component {

    constructor(props) {
        super(props);
        this.state = {
          key: 1,
          show: true,
          disabled:true
        };
       this.handleSelect = this.handleSelect.bind(this);
       this.handleDismiss = this.handleDismiss.bind(this);
       this.handleShow = this.handleShow.bind(this);
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

    handleDismiss() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    

    render() {
        let module = null;
        let moduleAlert = null;
        // let moduleLink = <MutualFundStep3 />;
        if(this.state.key !=1){
            module= <Button className="back" onClick={()=>this.handleSelect(1)}>Volver</Button>     
            
            if (this.state.show) {
                moduleAlert = 
                    <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
                        <span className="alert-icon-info"></span>
                        <h4>¡Importante!</h4>
                        <p>
                        Las características esenciales de la inversión en este fondo mutuo se encuentran contenidas en su reglamento interno y 
                        contrato general de fondos, 
                        las que declaro conocer y aceptar en su integridad.
                        </p>
                        
                    </Alert>
            }
        }

        if (this.state.key==3) {
            return (<Redirect to={'/transfer/transaction'}/>)
        }

        return (
        <div>
          {moduleAlert}
          <section>
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