import React, {Component} from 'react';
import './Pay.css';
import {Tabs, Tab, TabContainer, TabContent, TabPane} from 'react-bootstrap';
import TabPayStep1 from '../Tab/TabPayStep1';
import RightBox from "../Rightbox/Rightbox";

class Pay extends Component {

    render() {
        return (
          <section>
            <div className="row">
                <div className='col-sm-9 divLeft'>
                    <h1>Pagar Mis Productos </h1>        
                        <div>
                            <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                                <Tab eventKey={1} title="1. Seleccionar Destino">
                                    <TabPayStep1 />
                                </Tab>
                                <Tab eventKey={2} title="2. Confirmar" disabled>
                                    Tab 2 content
                                </Tab>
                            </Tabs>
                        </div>        
                </div>  
                <div className='col-sm-3'>
                    <RightBox />
                </div>
            </div>
          </section>
        );
    }
}

export default Pay;