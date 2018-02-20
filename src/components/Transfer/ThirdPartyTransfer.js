import React, {Component} from 'react';
import './ThirdPartyTransfer.css';
import {Tabs, Tab, TabContainer, TabContent, TabPane} from 'react-bootstrap';
import Tab1 from '../Tab/Tab1';
import RightBox from "../Rightbox/Rightbox";

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
                                    <Tab1 />
                                </Tab>
                                <Tab eventKey={2} title="2. Ingresar" disabled>
                                    Tab 2 content
                                </Tab>
                                <Tab eventKey={3} title="3. Confirmar" disabled>
                                    Tab 3 content
                                </Tab>
                            </Tabs>
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