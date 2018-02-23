import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { GetAccounts } from "../../services/GetAccounts"
import { Table } from 'react-bootstrap';
import './Account.css';
import RightBox from "../Rightbox/Rightbox";
import TopBox from "../Topbox/Topbox";
import Calendar from "../Calendar/Calendar";
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

import { Line, Circle } from 'rc-progress';


class Account extends Component {

  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.toggleCredit = this.toggleCredit.bind(this);
    this.toggleCuentas = this.toggleCuentas.bind(this);
    this.squarebtnCredit = [...false];
    this.squarebtnCuentas = [...false];

    this.state = {
      items: [],
      resumenExpand:false,
      cuentasExpand: false,
      creditExpand: false,
      squarebtnArrayCredit: this.squarebtnCredit,
      squarebtnArrayCuentas: this.squarebtnCuentas
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

    toggleCredit(index) {
      this.squarebtnCredit[index] = !this.squarebtnCredit[index];
      let newArray = this.squarebtnCredit;
        this.setState({
            squarebtnArrayCredit: newArray
        });
    }

    toggleCuentas(index) {
        this.squarebtnCuentas[index] = !this.squarebtnCuentas[index];
        let newArray = this.squarebtnCuentas;
        this.setState({
            squarebtnArrayCuentas: newArray
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
                <div style={{display: this.state.resumenExpand? 'block' : 'none'}}>
                  <div className="progress-chart">
                    <div className="row progress1">
                      <div className=" col-md-3 col-sm-3 progress-title">
                        Saldos en Cuentas
                      </div>
                      <div className=" col-md-9 col-sm-9 relative">
                        <div className="progressbar">
                          <div>
                            <Line percent="100" strokeWidth="3.5" strokeColor="#00bb04" prefixCls="jeremy" trailColor="transparent"  strokeLinecap="butt" />
                          </div>
                        </div>
                        <span className="absolute progress-number">$ 12.000.000</span>
                      </div>
                    </div>
                    <div className="row progress2">
                      <div className=" col-md-3 col-sm-3 progress-title">
                        Cupos Utilizados
                      </div>
                      <div className=" col-md-9 col-sm-9 relative">
                        <div className="progressbar">
                          <div>
                            <Line percent="50" strokeWidth="3.5" strokeColor="#d81e05" prefixCls="jeremy" trailColor="transparent"  strokeLinecap="butt" />
                          </div>
                        </div>
                        <span className="absolute progress-number">$ -6.000.000</span>
                      </div>
                    </div>
                    <div className="row progrees3">
                      <div className=" col-md-3 col-sm-3 progress-title">
                        Saldo Disponible
                      </div>
                      <div className=" col-md-9 col-sm-9 relative">
                        <div className="progressbar">
                          <div>
                            <Line percent="50" strokeWidth="3.5" strokeColor="#00bb04" prefixCls="jeremy" trailColor="transparent"  strokeLinecap="butt" />
                          </div>
                        </div>
                        <span className="absolute progress-number">$ 6.000.000</span>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="summerary-title" onClick={this.changeCuentas.bind(this)}>
                  <i className="fa fa-caret-right arrow-down" aria-hidden="true" style={{display: this.state.cuentasExpand? 'none' : 'block'}}></i>
                  <i className="fa fa-caret-down arrow-down" aria-hidden="true" style={{display: this.state.cuentasExpand? 'block' : 'none'}}></i>
                  <h2 className="account-title">Cuentas Bancarias</h2>
                </div>
                <div style={{display: this.state.cuentasExpand? 'block' : 'none'}}>
                  {/*<Table responsive>*/}
                    {/*<thead>*/}
                    {/*</thead>*/}
                    {/*<tbody >*/}
                      {/*<tr>*/}
                        {/*<td>Cuenta Corriente Pesos *** 0343</td>*/}
                        {/*<td>1022093</td>*/}
                      {/*</tr>*/}
                    {/*</tbody>*/}
                  {/*</Table>*/}
                  <Table >
                    <thead>
                    </thead>
                      {this.state.items.map((item,index) =>
                          <tbody key={item.id}>
                          <tr>
                            <td><Link to={`/account/${item.id}`}>{item.type}</Link></td>
                            <td className="amount">{item.primary_balance.amount}
                              <Dropdown isOpen={this.state.squarebtnArrayCuentas[index]} toggle={()=>{this.toggleCuentas(index)}} tag="li">
                                <DropdownToggle
                                    tag="a"
                                    data-toggle="dropdown"
                                    aria-expanded={this.state.squarebtnArrayCuentas[index]}>
                                    <span >

                                      <i className={!this.state.squarebtnArrayCuentas[index]?"fa fa-square square-btn red":"fa fa-square square-btn white square-border"} aria-hidden="true"></i>
                                      <i className={!this.state.squarebtnArrayCuentas[index]?"fa fa-sort-desc arrow-down-btn white":"fa fa-sort-desc arrow-down-btn black"} aria-hidden="true"></i>

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

                <div className="summerary-title" onClick={this.changeCredit.bind(this)}>
                  <i className="fa fa-caret-right arrow-down" aria-hidden="true" style={{display: this.state.creditExpand? 'none' : 'block'}}></i>
                  <i className="fa fa-caret-down arrow-down" aria-hidden="true" style={{display: this.state.creditExpand? 'block' : 'none'}}></i>
                  <h2 className="account-title">Créditos y Tarjetas de Crédito</h2>
                </div>
                <div className="overview-table" id="Body" style={{display: this.state.creditExpand? 'block' : 'none'}}>
                  <div >
                    {/*<Table responsive>*/}
                    <Table >
                      <thead>
                      </thead>
                        {this.state.items.map((item,index) =>
                            <tbody key={item.id}>
                            <tr>
                              <td><Link to={`/account/${item.id}`}>{item.type}</Link></td>
                              <td className="amount">{item.primary_balance.amount}
                                <Dropdown isOpen={this.state.squarebtnArrayCredit[index]} toggle={()=>{this.toggleCredit(index)}} tag="li">
                                  <DropdownToggle
                                      tag="a"
                                      data-toggle="dropdown"
                                      aria-expanded={this.state.squarebtnArrayCredit[index]}>
                                    <span >

                                      <i className={!this.state.squarebtnArrayCredit[index]?"fa fa-square square-btn red":"fa fa-square square-btn white square-border"} aria-hidden="true"></i>
                                      <i className={!this.state.squarebtnArrayCredit[index]?"fa fa-sort-desc arrow-down-btn white":"fa fa-sort-desc arrow-down-btn black"} aria-hidden="true"></i>

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