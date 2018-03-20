import React, {Component} from 'react';
import './Config.css';
import { Tabs, Tab, Table, Button, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import Config1 from "./Config1";
import Config2 from "./Config2";
import Config3 from "./Config3";
import Config4 from "./Config4";
import { FormattedMessage } from 'react-intl';

class Statement extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            key: 1
        };
    }

    render() {  
    
        return (
            <section>
            <div className="row">               
                <div className='col-sm-9'>                    
                    <h1><FormattedMessage id='configuration.title' /></h1>        
                    <div>
                        <Tabs animation={false} id="noanim-tab-example">
                            <Tab eventKey={1} title={<FormattedMessage id='configuration.tab1text' />}>
                                <Config1 location = {this.props.location}/>
                            </Tab>
                            <Tab eventKey={2} title={<FormattedMessage id='configuration.tab2text' />}>
                                <Config2 location = {this.props.location}/>
                            </Tab>
                            <Tab eventKey={3} title={<FormattedMessage id='configuration.tab3text' />}>
                                <Config3 location = {this.props.location}/>
                            </Tab>
                            <Tab eventKey={4} title={<FormattedMessage id='configuration.tab4text' />}>
                                <Config4 location = {this.props.location}/>
                            </Tab>
                        </Tabs>
                    </div>  
                    {/* <div className="row btnStyle">
                        <Button className="accept">Aceptar</Button>
                        <Button className="cancel"><Link to="/account">Cancelar</Link></Button>
                    </div>       */}
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