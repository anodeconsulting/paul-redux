import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { GetAccounts } from "../../services/GetAccounts"
import { Table } from 'react-bootstrap';
import './Account.css';
import RightBox from "../Rightbox/Rightbox";
import TopBox from "../Topbox/Topbox";
import Calendar from "../Calendar/Calendar";
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

class Account extends Component {

  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.toggle = this.toggle.bind(this);
    this.squarebtn = [...false];

    this.state = {
      items: [],
      resumenExpand:false,
      cuentasExpand: false,
      creditExpand: false,
      squarebtnArray: this.squarebtn
    };
  }

  componentDidMount(){
    GetAccounts().then((result) => {
      this.setState({items: result})   
     });
  }
    changeResumen(){
        this.setState({resumenExpand : !this.state.resumenExpand})
    }

    changeCuentas(){
        this.setState({cuentasExpand : !this.state.cuentasExpand})
    }

    changeCredit(){
        this.setState({creditExpand : !this.state.creditExpand})
    }

    toggle(index) {
      this.squarebtn[index] = !this.squarebtn[index];
      let newArray = this.squarebtn;
        this.setState({
            squarebtnArray: newArray
        });
    }

  render() {

      return (
        <section >
            <TopBox/>
            <div className="row">
              <div className="RUIFW-content-main RUIFW-col-9 col-md-9 col-sm-9">

                <div className="summerary-title" onClick={this.changeResumen.bind(this)}>
                  <i className="fa fa-caret-right arrow-down" aria-hidden="true" style={{display: this.state.resumenExpand? 'none' : 'block'}}></i>
                  <i className="fa fa-caret-down arrow-down" aria-hidden="true" style={{display: this.state.resumenExpand? 'block' : 'none'}}></i>
                  <h2 className="account-title" >Resumen de Productos</h2>
                </div>

                <div className="summerary-title" onClick={this.changeCuentas.bind(this)}>
                  <i className="fa fa-caret-right arrow-down" aria-hidden="true" style={{display: this.state.cuentasExpand? 'none' : 'block'}}></i>
                  <i className="fa fa-caret-down arrow-down" aria-hidden="true" style={{display: this.state.cuentasExpand? 'block' : 'none'}}></i>
                  <h2 className="account-title">Cuentas Bancarias</h2>
                </div>
                <div style={{display: this.state.cuentasExpand? 'block' : 'none'}}>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>Type</th>
                      <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody >
                      <tr>
                        <td>Cuenta Corriente Pesos *** 0343</td>
                        <td>1022093</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div className="summerary-title" onClick={this.changeCredit.bind(this)}>
                  <i className="fa fa-caret-right arrow-down" aria-hidden="true" style={{display: this.state.creditExpand? 'none' : 'block'}}></i>
                  <i className="fa fa-caret-down arrow-down" aria-hidden="true" style={{display: this.state.creditExpand? 'block' : 'none'}}></i>
                  <h2 className="account-title">Créditos y Tarjetas de Crédito</h2>
                </div>
                {/*<div className="" id="Body" style={{display: this.state.creditExpand? 'block' : 'none'}}>*/}
                <div className="" id="Body" >
                  <div >
                    <Table responsive>
                      <thead>
                      <tr>
                        <th>Type</th>
                        <th>Amount</th>
                      </tr>
                      </thead>
                        {this.state.items.map((item,index) =>
                            <tbody key={item.id}>
                            <tr>
                              <td><Link to={`/account/${item.id}`}>{item.type}</Link></td>
                              <td className="amount">{item.primary_balance.amount}
                                <Dropdown isOpen={this.state.squarebtnArray[index]} toggle={()=>{this.toggle(index)}} tag="li">
                                  <DropdownToggle
                                      tag="a"
                                      data-toggle="dropdown"
                                      aria-expanded={this.state.squarebtnArray[index]}>
                                    <span >

                                      <i className={!this.state.squarebtnArray[index]?"fa fa-square square-btn red":"fa fa-square square-btn white square-border"} aria-hidden="true"></i>
                                      <i className={!this.state.squarebtnArray[index]?"fa fa-sort-desc arrow-down-btn white":"fa fa-sort-desc arrow-down-btn black"} aria-hidden="true"></i>
                                      {/*<i className="fa fa-square square-btn" aria-hidden="true"></i>*/}
                                      {/*<i className="fa fa-sort-desc arrow-down-btn" aria-hidden="true" ></i>*/}
                                    </span>
                                  </DropdownToggle>
                                  <DropdownMenu tag="ul">
                                      <li role="presentation">
                                        <a href=""  role="menuitem" className="squaren-btn-item">
                                          Transferir a Terceros</a>
                                      </li>
                                      <li role="presentation">
                                        <a href=""  role="menuitem" className="squaren-btn-item">
                                          Transferencias entre Mis Cuentas</a>
                                      </li>

                                      <li role="presentation">
                                        <a href="#"  role="menuitem" className="squaren-btn-item">Comprar Minutos de Celular</a>
                                      </li>
                                      <li role="presentation">
                                        <a href=""  role="menuitem" className="squaren-btn-item">Cartolas Oficiales</a>
                                      </li>

                                  </DropdownMenu>
                                </Dropdown>
                              </td>
                            </tr>
                            </tbody>
                        )}
                    </Table>
                  </div>


                </div>

                <div className="calendar">
                  <Calendar/>
                </div>
              </div>

              <div className="RUIFW-content-side RUIFW-col-3 col-md-3 col-sm-3">
                <RightBox location = {this.props.location}/>
              </div>
            </div>

        </section>


    );
  }
}

export default Account;