import React, {Component} from 'react';
import './Leftbox.css'
import { Link } from 'react-router-dom';
import { ListGroup,ListGroupItem,Panel } from 'react-bootstrap';

class Leftbox extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        openCheque: true,
        openCredit: true,
        data: [
          {
            type: "cheque",
            accounts:["Cuenta Corriente Pesos *** 0343",
                      "Cuenta Corriente Pesos *** 9990",
                      "Cuenta Pesos *** 1111"
            ]
          },
          {
            type: "creditcard",
            accounts:[
              "MASTERCARD *** 8981"
            ]
          },
          {
            type: "lineofcredit",
            accounts:[
              "Línea de Crédito *** 8482",
              "Corriente Pesos *** 0011"
            ]
          }
        ]       
      };

      this.handleClickCheque = this.handleClickCheque.bind(this);
      this.handleClickCredit = this.handleClickCredit.bind(this);
    }

    handleClickCheque(e){
      this.setState({ openCheque: !this.state.openCheque});
    }

    handleClickCredit(e){
      this.setState({ openCredit: !this.state.openCredit});
    }

    handleCard(id){
      console.log(this.state.data[id]);
    }
  
    render() {

      let module = null;
      let module1 = null;
      if(!this.state.openCheque){
        module = <i className="fas fa-caret-right"></i>
      }else{
        module = <i className="fas fa-caret-down"></i>
      }

      if(!this.state.openCredit){
        module1 = <i className="fas fa-caret-right"></i>
      }else{
        module1 = <i className="fas fa-caret-down"></i>
      }
      return (
        <div>        
          <Panel bsStyle="danger" id="collapsible-panel-example-3" expanded={this.state.openCheque}>
            <Panel.Heading>
            <Panel.Title toggle onClick={this.handleClickCheque}>
              {module}Cuentas Bancarias
            </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <ListGroup>
                {this.state.data[0].accounts.map((ele,index)=>
                    <ListGroupItem key={index}><Link to={'/account/'+ele} onClick={this.handleCard.bind(this, index)}>{ele}</Link></ListGroupItem>
                )}
              </ListGroup>
            </Panel.Collapse>
          </Panel>
          <Panel bsStyle="danger" id="collapsible-panel-example-3" expanded={this.state.openCredit}>
            <Panel.Heading>
            <Panel.Title toggle onClick={this.handleClickCredit}>
              {module1}Créditos y Tarjetas de Crédito
            </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <ListGroup>
                {this.state.data[1].accounts.map((ele,index)=>
                    <ListGroupItem key={index}><Link to='/creditcard' onClick={this.handleCard.bind(this, index)}>{ele}</Link></ListGroupItem>
                )}
              </ListGroup>
            </Panel.Collapse>
          </Panel>
        </div>
      );
    }
  }
  
  export default Leftbox;