import React, { Component } from 'react';
import './Header.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import { location } from 'react-router';

class Header extends Component {
      constructor(props){
          super(props);
          let time = new Date().toLocaleDateString('es',{ weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' });
          this.toggle = this.toggle.bind(this);
          this.toggle2 = this.toggle2.bind(this);
          this.state = {
              redirectToReferrer: false,
              pathBase: "/react/",
              gear: false,
              question: false,
              GearOpen: false,
              QuestionOpen: false,
              showIcon:true,
              localTime:time
          };
          
        }

        logout() {
            window.location.pathname = this.state.pathBase;
        }

         static handleClick(e){
                    let target = e.target;
                    let li = target.parentElement.parentElement.parentElement;
                    li.click();
                }



        toggle() {
            this.setState({
                GearOpen: !this.state.GearOpen
            });
        }

        toggle2() {
            this.setState({
                QuestionOpen: !this.state.QuestionOpen
            });
        }

        displayIcon(){
            this.setState({
                showIcon: !this.state.showIcon
            });
        }

        collapseNav(){
            let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if(w < 766){
                let btn =document.getElementsByClassName("navbar-toggle");
                btn[0].click();
            }
        }

        runningTime(that){
            let time = new Date().toLocaleDateString('es',{ weekday: 'long', year: 'numeric', month: 'long', day: '2-digit',hour: 'numeric', minute: 'numeric', second: 'numeric' });
            that.setState({
                localTime: time
            });

        }

        handleLan(e){
            let language = document.getElementsByTagName("img")[0].src;
            if(language.includes('b87a932d')){
                let time = new Date().toLocaleDateString('es',{ weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' });
                this.setState({localTime: time});
                language = "es-ES";
            }else{
                language = "en-US";
                let time = new Date().toLocaleDateString('en',{ weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' });
                this.setState({localTime: time});
            }
            this.props.dispatch({
                type: 'changeLanguage',
                id: language
            })
        }

      render() {
          const path = this.state.pathBase;
          const user = this.props.users;

          let loginPage;
          let logout;

          if(window.location.pathname !== path){
            loginPage=
                <Navbar.Collapse>
                 <div>
                    <Nav >
                        <IndexLinkContainer to={`/account`} onClick={()=>{this.collapseNav()}}>
                            <NavItem eventKey={1} href="#">
                                <FormattedMessage id='nav.product' />
                            </NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to={`/account/deposite/Cuenta%20Corriente%20Pesos%20***%200343`} onClick={()=>{this.collapseNav()}}>
                            <NavItem eventKey={2} href="#">
                            <FormattedMessage id='nav.transaction' />
                            </NavItem>
                        </IndexLinkContainer>
                        <NavDropdown eventKey={3} title={<FormattedMessage id='nav.pay' />} id="Pager" >
                            <li id="billpayment" className="nav-toggle">
                                <a  title="Pagar Servicios" ><FormattedMessage id='nav.payService' /></a>
                                <div ><FormattedMessage id='nav.payServicetext' /></div>
                            </li>
                            <li id="preauthpayment" className="nav-toggle">
                                <a  title="Pagos Automáticos (PAC/PAT)" ><FormattedMessage id='nav.automaticePayments' /> </a>
                                <div><FormattedMessage id='nav.antomaticePaymentstext' /></div>
                            </li>
                            <li id="addcclmpayment" className="nav-toggle" onClick={()=>{this.collapseNav()}}>
                                <Link to={`/pay`} onClick={Header.handleClick.bind(this)}><FormattedMessage id='nav.paymyproducts' /></Link>
                                <div><FormattedMessage id='nav.paymyproductstext' /></div>
                            </li>
                            <li id="paymentoverview" className="nav-toggle">
                                <a title="Histórico de Pagos" ><FormattedMessage id='nav.paymenthistory' /> </a>
                                <div><FormattedMessage id='nav.paymenthistorytext' /></div>
                            </li>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title={<FormattedMessage id='nav.transfer' />} id="Transgerir">
                                <li id="thirdpartytransfer" className="nav-toggle" onClick={()=>{this.collapseNav()}}>
                                    <Link to={`/thirdPartyTransfer`} onClick={Header.handleClick.bind(this)}><FormattedMessage id='nav.transfers.transfer' /></Link>
                                    <div><FormattedMessage id='nav.transfers.transfertext' /></div>
                                </li>
                                <li id="managerecipients" className="nav-toggle">
                                    <a title="Administración de Destinatarios" ><FormattedMessage id='nav.transfers.review' /> </a>
                                    <div><FormattedMessage id='nav.transfers.reviewtext' /></div>
                                </li>

                                <li id="addfundstransfer" className="nav-toggle" onClick={()=>{this.collapseNav()}}>
                                    <Link to={`/accountTransfer`} title="Transferir entre Mis Cuentas" onClick={Header.handleClick.bind(this)}><FormattedMessage id='nav.transfers.tranbetweenaccount' /> </Link>
                                    <div><FormattedMessage id='nav.transfers.tranbetweenaccounttext' /></div>
                                </li>

                                <li id="transfersoverview" className="nav-toggle">
                                    <a  title="Cartola de Transferencias"><FormattedMessage id='nav.transfers.admin' /> </a>
                                    <div><FormattedMessage id='nav.transfers.admintext' /></div>
                                </li>
                                <li className="nav-toggle clear"></li>

                                <li id="cashadvance" className="nav-toggle">
                                    <a  title="Avance de Tarjeta de Crédito" ><FormattedMessage id='nav.transfers.cashadvance' /> </a>
                                    <div><FormattedMessage id='nav.transfers.cashadvancetext' /></div>
                                </li>

                        </NavDropdown>
                        <NavDropdown eventKey={5} title={<FormattedMessage id='nav.invest' />} id="Invertir">
                            <li id="buy_mutual_fund" className="nav-toggle" onClick={()=>{this.collapseNav()}}>
                                <Link to={`/pay/mutualfund`} onClick={Header.handleClick.bind(this)}><FormattedMessage id='nav.invests.invest' /></Link>
                                <div><FormattedMessage id='nav.invests.investtext' /></div>
                            </li>
                            <li id="investment_overview" className="nav-toggle">
                                <a  title="Cartola de Inversiones" ><FormattedMessage id='nav.invests.review' /> </a>
                                <div><FormattedMessage id='nav.invests.reviewtext' /></div>
                            </li>
                            <li className="nav-toggle clear"></li>
                            <li id="add_term_deposit" className="nav-toggle">
                                <a  title="Invertir en Depósitos a Plazo" ><FormattedMessage id='nav.invests.deposite' /> </a>
                                <div><FormattedMessage id='nav.invests.depositetext' /></div>
                            </li>
                        </NavDropdown>
                        <NavItem eventKey={6} >
                            <FormattedMessage id='nav.AvailableOffers' />
                        </NavItem>
                    </Nav>

                    <ul className="nav navbar-nav floatRight navIcon-ul">
                        {/* <FormGroup controlId="formControlsSelect">
                            <FormControl componentClass="select" placeholder="select" onChange={this.handleLan.bind(this)}>
                                <option value="es-ES">es</option>
                                <option value="en-US">en</option>
                            </FormControl>
                        </FormGroup> */}
                        <ReactFlagsSelect 
                        countries={["CL", "CA"]} 
                        showSelectedLabel={false} 
                        showOptionLabel={false} 
                        defaultCountry="CL"
                        onSelect = {this.handleLan.bind(this)}
                        />
                    </ul>

                    <ul className="nav navbar-nav floatRight navIcon-ul question" style={{display: this.state.showIcon? 'block' : 'none'}}>
                        <Dropdown isOpen={this.state.QuestionOpen} toggle={this.toggle2} tag="li">
                            <DropdownToggle
                                tag="a"
                                onClick={this.toggle2}
                                data-toggle="dropdown"
                                aria-expanded={this.state.QuestionOpen}>
                                <i className="fa fa-question navIcon"></i>
                            </DropdownToggle>
                            <DropdownMenu tag="ul">
                                <li className="nav-toggle" id="">
                                    <a  title="Ayuda con esta página"><FormattedMessage id='nav.ask.title1' /></a>
                                    <div><FormattedMessage id='nav.ask.text1' /></div>
                                </li>
                                <li className="nav-toggle clear"></li>

                                <li  className="nav-toggle"id="">
                                    <a  title="Centro de Ayuda" ><FormattedMessage id='nav.ask.title2' /></a>
                                    <div><FormattedMessage id='nav.ask.text2' /></div></li>
                                <li className="nav-toggle clear"></li>

                                <li className="banner2">
                                    <div>Get peace of mind while travelling with new Scotia Visa Travel card
                                        <h1 className="creditcard-pic"></h1>
                                        <button className="btn desk-btn">Learn More</button>
                                    </div>
                                </li>
                            </DropdownMenu>
                        </Dropdown>
                    </ul>

                    <ul className="nav navbar-nav floatRight navIcon-ul gear" style={{display: this.state.showIcon? 'block' : 'none'}}>
                        <Dropdown isOpen={this.state.GearOpen} toggle={this.toggle} tag="li">
                            <DropdownToggle
                                tag="a"
                                onClick={this.toggle}
                                data-toggle="dropdown"
                                aria-expanded={this.state.GearOpen}>
                                <i className="fa fa-cog navIcon"></i>
                            </DropdownToggle>
                            <DropdownMenu tag="ul">

                                <li className="nav-toggle3" id="">
                                    <Link to={`/statement`} title="Cartolas, Estados de Cuenta, Certificados y Documentos Tributarios Electrónicos" onClick={Header.handleClick.bind(this)}>
                                    <FormattedMessage id='nav.settings.title1' /> </Link>
                                    <div><FormattedMessage id='nav.settings.text1' /></div>
                                </li>
                                <li className="nav-toggle3" id="">
                                    <Link to={`/password`} title="Configuración de Seguridad " onClick={Header.handleClick.bind(this)}>
                                    <FormattedMessage id='nav.settings.title2' /></Link>
                                    <div><FormattedMessage id='nav.settings.text2' /></div>
                                </li>
                                <li className="nav-toggle3 clear"></li>
                                <li className="nav-toggle3" id="">
                                    <Link to={`/configuration`} title="Configuración de Información Personal y de Productos" onClick={Header.handleClick.bind(this)}>
                                    <FormattedMessage id='nav.settings.title3' /></Link>
                                    <div><FormattedMessage id='nav.settings.text3' /></div>
                                </li>

                                <li className="nav-toggle3" id="">
                                    <a  title="Cheques y Ordenes de No Pago"><FormattedMessage id='nav.settings.title4' /></a><div>
                                    <FormattedMessage id='nav.settings.text4' /></div>
                                </li>
                                <li className="nav-toggle3 clear"></li>
                                <li className="nav-toggle3" id="">
                                    <a  title="ScotiaPass"><FormattedMessage id='nav.settings.title5' /></a>
                                    <div><FormattedMessage id='nav.settings.text5' /></div>
                                </li>

                                <li className="nav-toggle3" id="">
                                    <a  title="Tarjetas de Crédito Virtuales">
                                    <FormattedMessage id='nav.settings.title6' /></a>
                                    <div><FormattedMessage id='nav.settings.text6' /></div>
                                </li>
                                <li className="nav-toggle3 clear"></li>
                                <li className="nav-toggle3 clear"></li>

                                <li className="banner">
                                    <div>Get peace of mind while travelling with new Scotia Visa Travel card
                                        <h1 className="creditcard-pic"></h1>
                                        <button className="btn desk-btn">Learn More</button>
                                    </div>
                                </li>
                            </DropdownMenu>
                        </Dropdown>
                    </ul>
                </div>
                </Navbar.Collapse>

            logout =
                <div className="logout">
                <ul className="RUIFW-nav-quick-links ">
                    <li className="lftbox bold-txt">
                        <span>John Rodingo Laslomos Scenarious Along Names Onos Twolinos </span>
                    </li>
                    <li >
                        <IndexLinkContainer to={`/`}>
                            <button className="btn" id="signout" ><FormattedMessage id='logout.logout' /></button>
                        </IndexLinkContainer>
                    </li>
                    <li className="lftbox">
                            <span className="h-separator">
                                <a herf="#"> <FormattedMessage id='logout.lastentry' />: {this.state.localTime}</a>
                            </span>
                    </li>
                    <li>
                            <span className="h-separator">
                                <i className="icon-lock icon-lock-signout"></i>
                                <a herf="#" className="pull-right"><FormattedMessage id='logout.security' /></a>
                            </span>
                    </li>
                </ul>
            </div>

        }


        return (
            <div className="navbar-border" >
                <div className="navbar-logo">
                    <h1 className="RUIFW-brand RUIFW-col-6 RUIFW-sm-6" >
                        <span className="RUIFW-sr sr-only sr-only"></span>
                    </h1>
                </div>
                {logout}
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Toggle onClick={()=>{this.displayIcon();}} />
                    </Navbar.Header>
                        {loginPage}
                </Navbar>
            </div>
        );
      }
}

// //make sure we have all the props
// Header.propTypes = {
//     users: React.PropTypes.object.isRequired
// }

// export the connected class
function mapStateToProps(state){
    // console.log('changing');
    // console.log(state);
    let change;
    if(state.users.id){
        // console.log('changing id');
        change = state.users.id;
    }else {
        change = {id:'es-ES'};
    }
    return {
        change:change
    }
}
export default connect(mapStateToProps) (Header);


