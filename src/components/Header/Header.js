import React, { Component } from 'react';
import './Header.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

class Header extends Component {
      constructor(){
          super();
          this.toggle = this.toggle.bind(this);
          this.toggle2 = this.toggle2.bind(this);
          this.state = {
              redirectToReferrer: false,
              pathBase: "/react/",
              gear: false,
              question: false,
              GearOpen: false,
              QuestionOpen: false,
              showIcon:true
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

      render() {
          const path = this.state.pathBase;

      let loginPage;
      let logout;
        if(window.location.pathname !== path){
            loginPage=
                <Navbar.Collapse>
                 <div>
                    <Nav >
                        <IndexLinkContainer to={`/account`}>
                            <NavItem eventKey={1} href="#">
                                Mis Productos
                            </NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to={`/account/deposite/Cuenta%20Corriente%20Pesos%20***%200343`}>
                            <NavItem eventKey={2} href="#">
                                Mis Movimientos
                            </NavItem>
                        </IndexLinkContainer>
                        <NavDropdown eventKey={3} title="Pagar" id="Pager" >
                            <li id="billpayment" className="nav-toggle">
                                <a href="" title="Pagar Servicios" >Pagar Servicios</a>
                                <div >Realiza tus pagos de servicios en línea</div>
                            </li>
                            <li id="preauthpayment" className="nav-toggle">
                                <a href="#" title="Pagos Automáticos (PAC/PAT)" >Pagos Automáticos (PAC/PAT) </a>
                                <div>Administra tus Pagos de Cuentas de Servicios en forma automática con cargo a tu Cuenta o Tarjeta</div>
                            </li>
                            <li id="addcclmpayment" className="nav-toggle">
                                <Link to={`/pay`} onClick={Header.handleClick.bind(this)}>Pagar Mis Productos</Link>
                                <div>Realiza el pago de tus productos de crédito con cargo a tus cuentas</div>
                            </li>
                            <li id="paymentoverview" className="nav-toggle">
                                <a href="#" title="Histórico de Pagos" >Histórico de Pagos </a>
                                <div>Revisa tus pagos realizados</div>
                            </li>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Transferir" id="Transgerir">
                                <li id="thirdpartytransfer" className="nav-toggle">
                                    <Link to={`/thirdPartyTransfer`} onClick={Header.handleClick.bind(this)}>Transferir a Terceros</Link>
                                    <div>Realiza transferencias a cuentas en Scotiabank o en otro banco</div>
                                </li>
                                <li id="managerecipients" className="nav-toggle">
                                    <a href="#" title="Administración de Destinatarios" >Administración de Destinatarios </a>
                                    <div>Agregar/ editar/ eliminar destinatario de transferencias</div>
                                </li>

                                <li id="addfundstransfer" className="nav-toggle">
                                    <Link to={`/accountTransfer`} title="Transferir entre Mis Cuentas" onClick={Header.handleClick.bind(this)}>Transferir entre Mis Cuentas </Link>
                                    <div>Realiza tus transferencias entre tus cuentas y pago de línea de crédito</div>
                                </li>

                                <li id="transfersoverview" className="nav-toggle">
                                    <a href="#" title="Cartola de Transferencias">Cartola de Transferencias </a>
                                    <div>Revisa tus transferencias realizadas y programadas.</div>
                                </li>
                                <li className="nav-toggle clear"></li>

                                <li id="cashadvance" className="nav-toggle">
                                    <a href="#" title="Avance de Tarjeta de Crédito" >Avance de Tarjeta de Crédito </a>
                                    <div>Realiza avances en efectivo desde tus tarjetas de crédito hacia tus cuentas, con o sin cuotas.</div>
                                </li>

                        </NavDropdown>
                        <NavDropdown eventKey={5} title="Invertir" id="Invertir">
                            <li id="buy_mutual_fund" className="nav-toggle">
                                <Link to={`/pay/mutualfund`} onClick={Header.handleClick.bind(this)}>Invertir en Fondos Mutuos</Link>
                                <div>Selecciona Fondos Mutuos asociados a tu Perfil de Inversionista.</div>
                            </li>
                            <li id="investment_overview" className="nav-toggle">
                                <a href="#" title="Cartola de Inversiones" >Cartola de Inversiones </a>
                                <div>Revisa el movimiento de tus inversiones.</div>
                            </li>
                            <li className="nav-toggle clear"></li>
                            <li id="add_term_deposit" className="nav-toggle">
                                <a href="#" title="Invertir en Depósitos a Plazo" >Invertir en Depósitos a Plazo </a>
                                <div>Selecciona el plazo y la moneda en la que deseas invertir.</div>
                            </li>
                        </NavDropdown>
                        <NavItem eventKey={6} href="#">
                            Ofertas Disponibles
                        </NavItem>
                    </Nav>


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
                                    <a href="#" title="Ayuda con esta página">Ayuda con esta Página</a>
                                    <div>Conoce las instrucciones paso a paso de cómo usar las funcionalidades de esta página</div>
                                </li>
                                <li className="nav-toggle clear"></li>

                                <li  className="nav-toggle"id="">
                                    <a href="#" title="Centro de Ayuda" >Centro de Ayuda</a>
                                    <div>Revisa videos y tips de ayuda.</div></li>
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
                                    <a href="Chile_Online_Statements.html" title="Cartolas, Estados de Cuenta, Certificados y Documentos Tributarios Electrónicos">
                                        Cartolas, Estados de Cuenta, Certificados y Documentos Tributarios Electrónicos </a>
                                    <div>Descarga documentos y modifica opciones de envío.</div>
                                </li>
                                <li className="nav-toggle3" id="">
                                    <a href="Chile_Manage_Security_Settings_changePassword.html" title="Configuración de Seguridad ">
                                        Configuración de Seguridad</a>
                                    <div>Cambio de Contraseña</div>
                                </li>
                                <li className="nav-toggle3 clear"></li>
                                <li className="nav-toggle3" id="">
                                    <a href="Chile_General_Account_Settings.html" title="Configuración de Información Personal y de Productos">
                                        Configuración de Información Personal y de Productos</a>
                                    <div>Actualiza tus datos personales, administra y configura tus productos.</div>
                                </li>

                                <li className="nav-toggle3" id="">
                                    <a href="Chile_Manage_Cheques.html" title="Cheques y Ordenes de No Pago">Cheques y Ordenes de No Pago</a><div>
                                    Consulta el estado de un talonario o cheque e Instruye Ordenes de No Pago.</div>
                                </li>
                                <li className="nav-toggle3 clear"></li>
                                <li className="nav-toggle3" id="">
                                    <a href="Chile_Token_Management.html" title="ScotiaPass">ScotiaPass</a>
                                    <div>Activa, sincroniza y reemplaza tu dispositivo ScotiaPass</div>
                                </li>

                                <li className="nav-toggle3" id="">
                                    <a href="Chile_Virtual_CreditCard.html" title="Tarjetas de Crédito Virtuales">
                                        Tarjetas de Crédito Virtuales</a>
                                    <div>Crea, elimina y consulta tus tarjetas de crédito virtuales.</div>
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
                            <button className="btn" id="signout" >Salir</button>
                        </IndexLinkContainer>
                    </li>
                    <li className="lftbox">
                            <span className="h-separator">
                                <a herf="#">Último Ingreso: Miércoles, Julio 06, 2016 04:22 PM</a>
                            </span>
                    </li>
                    <li>
                            <span className="h-separator">
                                <i className="icon-lock icon-lock-signout"></i>
                                <a herf="#" className="pull-right">Garantía de Seguridad</a>
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
                    <div className="navbar-contact">
                        <a href=""  title="Términos y Condiciones">Términos y Condiciones &nbsp;&nbsp;</a>
                        <a href=""  title="Contacto">Contacto</a>
                    </div>
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

export default Header;


