import React, {Component} from 'react';
import './Leftbox.css'
import { Link } from 'react-router-dom';
import { ListGroup,ListGroupItem,Panel } from 'react-bootstrap';
import { Mortgage} from '../Mortgage/Mortgage';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

class Leftbox extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        selected:this.props.location.pathname.split('/')[3],
        active:false,
        openCheque: true,
        openCredit: true,
        data: [
          {
            type: "cheque",
            accounts:[
              {
                type:"deposite",
                account: "Cuenta Corriente Pesos *** 0343",
              },{
                type:"deposite",
                account: "Cuenta Corriente Pesos *** 9990"
              },{
                type:"deposite",
                account:"Cuenta Pesos *** 1111"
              }                                   
            ]
          },
          {
            type: "credit",
            accounts:[
              {
                type:"creditcard",
                account: "MASTERCARD *** 8981",
              },{
                type:"lineofcredit",
                account: "Línea de Crédito *** 0007"
              },{
                type:"mortgage",
                account:"Crédito Hipotecario*** 0010"
              },{
                type:"loan",
                account:"Créditos*** 0009"
              }         
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
      this.setState({ active: !this.state.active});
  
    }

    handleClickCredit(e){
      this.setState({ openCredit: !this.state.openCredit});
    }

    handleCard(ele1,ele2){
      this.setState({selected  :ele1})
      
      }

      _checkActiveBtn(filterName){

        return ((filterName===this.state.selected) ?'active':'');
        
      }
  
    render() {
    
      let module = null;
      let module1 = null;
      if(!this.state.openCheque){
        // module = <i className="fas fa-caret-right"></i>
        module = <span className="glyphicon glyphicon-triangle-right"></span>
      }else{
        // module = <i className="fas fa-caret-down"></i>
        module = <span className="glyphicon glyphicon-triangle-bottom"></span>
      }

      if(!this.state.openCredit){
        // module1 = <i className="fas fa-caret-right"></i>
        module1 = <span className="glyphicon glyphicon-triangle-right"></span>
      }else{
        // module1 = <i className="fas fa-caret-down"></i>
        module1 = <span className="glyphicon glyphicon-triangle-bottom"></span>
      }

      return (
        <div>        
          <Panel bsStyle="danger" id="collapsible-panel-example-3" defaultExpanded={this.state.openCheque}>
            <Panel.Heading>
            <Panel.Title toggle onClick={this.handleClickCheque}>
              {module}<FormattedMessage id='leftbox.bankaccounts' />
            </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <ListGroup id="firstList">
                {this.state.data[0].accounts.map((ele,index)=>
                    <ListGroupItem key={index} className={this._checkActiveBtn(ele.account)}><Link to={'/account/'+ele.type+'/'+ele.account} onClick={this.handleCard.bind(this, ele.account)}>{ele.account}</Link></ListGroupItem>
                )}
              </ListGroup>
            </Panel.Collapse>
          </Panel>
          <Panel bsStyle="danger" id="collapsible-panel-example-3" defaultExpanded={this.state.openCredit}>
            <Panel.Heading>
            <Panel.Title toggle onClick={this.handleClickCredit}>
              {module1}<FormattedMessage id='leftbox.creditaccounts' />
            </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <ListGroup id="secondList">
                {this.state.data[1].accounts.map((ele,index)=>
                    <ListGroupItem key={index} className={this._checkActiveBtn(ele.account)}><Link to={'/credit/'+ele.type+'/'+ele.account} onClick={this.handleCard.bind(this, ele.account)}>{ele.account}</Link></ListGroupItem>
                )}
              </ListGroup>
            </Panel.Collapse>
          </Panel>
          <br />
        </div>
      );
    }
  }
  
  export default Leftbox;