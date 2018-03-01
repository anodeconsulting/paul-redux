import React, {Component} from 'react';
import './ThirdPartyTransfer.css';
import {Button, Tabs, Tab, TabContainer, TabContent, TabPane} from 'react-bootstrap';
import TabThirdPartyTransferStep1 from '../Tab/TabThirdPartyTransferStep1';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";

class ThirdPartyTransfer extends Component {

    render() {
        return (
          <section>
            <div className="row">
                <div className='col-sm-9 divLeft'>
                    <h1>Transferencias a Terceros </h1>        
                        <div>
                            <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                                <Tab eventKey={1} title="1. Seleccionar Destino">
                                    <TabThirdPartyTransferStep1 />
                                </Tab>
                                <Tab eventKey={2} title="2. Ingresar" disabled>
                                    Tab 2 content
                                </Tab>
                                <Tab eventKey={3} title="3. Confirmar" disabled>
                                    Tab 3 content
                                </Tab>
                            </Tabs>
                            <span className="pushBot row">
                                <Button className="accept">Aceptar</Button>
                                <Button className="cancel"><Link to="/account">Cancelar</Link></Button>                       
                            </span>
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

export default ThirdPartyTransfer;