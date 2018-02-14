import React, {Component} from 'react';
import './Accordion.css'
import { Link } from 'react-router-dom';
import { ListGroup,ListGroupItem,Panel } from 'react-bootstrap';

class Accordion extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        open: true
      };
    }
  
    render() {
      return (
        <div>        
          <Panel bsStyle="danger" id="collapsible-panel-example-3" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>Cuentas Bancarias</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <ListGroup>
              <ListGroupItem><Link to='/account'>Cuenta Corriente Pesos *** 0343</Link></ListGroupItem>
              <ListGroupItem><Link to='/account'>MASTERCARD *** 8981</Link></ListGroupItem>
              <ListGroupItem><Link to='/account'>Cuenta Corriente Pesos *** 9990</Link></ListGroupItem>
              <ListGroupItem><Link to='/account'>Cuenta Pesos *** 1111</Link></ListGroupItem>
              <ListGroupItem><Link to='/account'>Línea de Crédito *** 8482</Link></ListGroupItem>
              <ListGroupItem><Link to='/account'>Corriente Pesos *** 0011</Link></ListGroupItem>
              <ListGroupItem><Link to='/account'>Cuenta Corriente *** 0022</Link></ListGroupItem>
            </ListGroup>
          </Panel.Collapse>
        </Panel>
        </div>
      );
    }
  }
  
  export default Accordion;