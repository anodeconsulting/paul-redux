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
import RedDropDownBtn from "../Tools/RedDropdownBtn/RedDropDownBtn";


class Account extends Component {

  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.toggleCredit = this.toggleCredit.bind(this);
    this.toggleCuentas = this.toggleCuentas.bind(this);
    this.squarebtnCredit = [...false];
    this.squarebtnCuentas = [...false];

    this.state = {
      itemsChecking: [],
      itemsCredit: [],
      resumenExpand:true,
      cuentasExpand: true,
      creditExpand: true,
      squarebtnArrayCredit: this.squarebtnCredit,
      squarebtnArrayCuentas: this.squarebtnCuentas
    };
  }

  componentDidMount(){
    GetAccounts().then((result) => {
      let credit = result.filter((item)=>{return !item.type.includes("CTA")});
      let Checking = result.filter((item)=>{return item.type.includes("CTA")});

        Checking[0].type = "Cuenta Corriente Pesos *** 0343";
        Checking[1].type = "Cuenta Corriente Pesos *** 9990";
        Checking[2].type = "Cuenta Pesos *** 1111";

        credit[0].type = "MASTERCARD *** 8981";
        credit[0].path = "/credit/creditcard/";
        credit[1].type = "Línea de Crédito *** 0007";
        credit[1].path = "/credit/lineofcredit/";
        credit[2].type = "Crédito Hipotecario*** 0010";
        credit[2].path = "/credit/mortgage/";

        // console.log(credit)
      this.setState({itemsChecking: Checking});
      this.setState({itemsCredit: credit});
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
                        {/*<span className="absolute progress-number">$ 12.000.000</span>*/}
                        <div >$ 12.000.000</div>
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
                        {/*<span className="absolute progress-number">$ -6.000.000</span>*/}
                        <div >$ -6.000.000</div>
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
                        {/*<span className="absolute progress-number">$ 6.000.000</span>*/}
                        <div >$ 6.000.000</div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="summerary-title" onClick={this.changeCuentas.bind(this)}>
                  <i className="fa fa-caret-right arrow-down" aria-hidden="true" style={{display: this.state.cuentasExpand? 'none' : 'block'}}></i>
                  <i className="fa fa-caret-down arrow-down" aria-hidden="true" style={{display: this.state.cuentasExpand? 'block' : 'none'}}></i>
                  <h2 className="account-title">Cuentas Bancarias</h2>
                </div>
                <div className="overview-table" style={{display: this.state.cuentasExpand? 'block' : 'none'}}>
                  <Table >
                    <thead>
                    </thead>
                      {this.state.itemsChecking.map((item,index) =>
                          <tbody key={item.id}>
                          <tr>
                            <td className="amount-title"><Link to={`/account/deposite/${item.type}`}>{item.type}</Link></td>
                            <td className="amount">
                                <div className="amount-number">${item.primary_balance.amount}</div>
                              <Dropdown isOpen={this.state.squarebtnArrayCuentas[index]} toggle={()=>{this.toggleCuentas(index)}} tag="li">
                                <DropdownToggle
                                    tag="a"
                                    data-toggle="dropdown"
                                    aria-expanded={this.state.squarebtnArrayCuentas[index]}>
                                  <RedDropDownBtn open = {this.state.squarebtnArrayCuentas[index]} />
                                </DropdownToggle>
                                <DropdownMenu tag="ul">
                                  <li role="presentation" className="squaren-btn-item">
                                    <Link to={`/thirdPartyTransfer`}>Transferir a Terceros</Link>
                                  </li>
                                  <li role="presentation" className="squaren-btn-item">
                                    <Link to={`/accountTransfer`}>Transferencias entre Mis Cuentas</Link>
                                  </li>
                                  <li role="presentation" className="squaren-btn-item">
                                    <Link to={`/statement`}>Estados de Cuenta</Link>
                                  </li>

                                  {/*<li role="presentation">*/}
                                    {/*<a href="#"  role="menuitem" className="squaren-btn-item">Comprar Minutos de Celular</a>*/}
                                  {/*</li>*/}
                                  {/*<li role="presentation">*/}
                                    {/*<a href=""  role="menuitem" className="squaren-btn-item">Cartolas Oficiales</a>*/}
                                  {/*</li>*/}

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
                    {/*<Table responsive>*/}
                    <Table >
                      <thead>
                      </thead>
                        {this.state.itemsCredit.map((item,index) =>
                            <tbody key={item.id}>
                            <tr>
                              <td className="amount-title"><Link to={`${item.path}${item.type}`}>{item.type}</Link></td>
                              <td className="amount">
                                <div className="amount-number">${item.primary_balance.amount}</div>
                                <Dropdown isOpen={this.state.squarebtnArrayCredit[index]} toggle={()=>{this.toggleCredit(index)}} tag="li">
                                  <DropdownToggle
                                      tag="a"
                                      data-toggle="dropdown"
                                      aria-expanded={this.state.squarebtnArrayCredit[index]}>
                                    <RedDropDownBtn open = {this.state.squarebtnArrayCredit[index]} />
                                  </DropdownToggle>
                                  <DropdownMenu tag="ul">
                                      <li role="presentation" className="squaren-btn-item">
                                        <Link to={`/pay`}>Pagar</Link>
                                      </li>
                                  </DropdownMenu>
                                </Dropdown>
                              </td>
                            </tr>
                            </tbody>
                        )}
                    </Table>
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