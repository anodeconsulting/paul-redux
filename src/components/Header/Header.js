import React, { Component } from 'react';
import './Header.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import Redirect from "react-router-dom/es/Redirect";
import { Link } from "react-router-dom";

class Header extends Component {
      constructor(){
          super();
        }


      render() {
          const path = "/react/";

      let loginPage;
        if(window.location.pathname !== path){
            loginPage=
                <div>
                    <Nav >
                        <NavItem eventKey={1} href="#">
                            Mis Productos
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Mis Movimientos
                        </NavItem>
                        <NavDropdown eventKey={3} title="Pagar" id="Pager">
                            <li id="billpayment" className="nav-toggle">
                                <a href="" title="Pagar Servicios" >Pagar Servicios</a>
                                <div>Realiza tus pagos de servicios en línea</div>
                            </li>
                            <li id="preauthpayment" className="nav-toggle">
                                <a href="#" title="Pagos Automáticos (PAC/PAT)" >Pagos Automáticos (PAC/PAT) </a>
                                <div>Administra tus Pagos de Cuentas de Servicios en forma automática con cargo a tu Cuenta o Tarjeta</div>
                            </li>
                            <li id="addcclmpayment" className="nav-toggle">
                                <a href={path + "pay"} title="Pagar Mis Productos" >Pagar Mis Productos</a>
                                <div>Realiza el pago de tus productos de crédito con cargo a tus cuentas</div>
                            </li>
                            <li id="paymentoverview" className="nav-toggle">
                                <a href="#" title="Histórico de Pagos" >Histórico de Pagos </a>
                                <div>Revisa tus pagos realizados</div>
                            </li>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Transferir" id="Transgerir">
                                <li id="thirdpartytransfer" className="nav-toggle">
                                    <a href={path + "thirdPartyTransfer"} title="Transferir a Terceros">Transferir a Terceros</a>
                                    <div>Realiza transferencias a cuentas en Scotiabank o en otro banco</div>
                                </li>
                                <li id="managerecipients" className="nav-toggle">
                                    <a href="#" title="Administración de Destinatarios" >Administración de Destinatarios </a>
                                    <div>Agregar/ editar/ eliminar destinatario de transferencias</div>
                                </li>

                                <li id="addfundstransfer" className="nav-toggle">
                                    <a href="#" title="Transferir entre Mis Cuentas" >Transferir entre Mis Cuentas </a>
                                    <div>Realiza tus transferencias entre tus cuentas y pago de línea de crédito</div>
                                </li>

                                <li id="transfersoverview" className="nav-toggle">
                                    <a href="#" title="Cartola de Transferencias">Cartola de Transferencias </a>
                                    <div>Revisa tus transferencias realizadas y programadas.</div>
                                </li>
                                <li id="cashadvance" className="nav-toggle">
                                    <a href="#" title="Avance de Tarjeta de Crédito" >Avance de Tarjeta de Crédito </a>
                                    <div>Realiza avances en efectivo desde tus tarjetas de crédito hacia tus cuentas, con o sin cuotas.</div>
                                </li>

                        </NavDropdown>
                        <NavDropdown eventKey={5} title="Invertir" id="Invertir">
                            <li id="buy_mutual_fund" className="nav-toggle">
                                <a href={path + "pay/mutualfund"} title="Invertir en Fondos Mutuos">Invertir en Fondos Mutuos</a>
                                <div>Selecciona Fondos Mutuos asociados a tu Perfil de Inversionista.</div>
                            </li>
                            <li id="investment_overview" className="nav-toggle">
                                <a href="#" title="Cartola de Inversiones" >Cartola de Inversiones </a>
                                <div>Revisa el movimiento de tus inversiones.</div>
                            </li>
                            <li id="add_term_deposit" className="nav-toggle">
                                <a href="#" title="Invertir en Depósitos a Plazo" >Invertir en Depósitos a Plazo </a>
                                <div>Selecciona el plazo y la moneda en la que deseas invertir.</div>
                            </li>
                        </NavDropdown>
                        <NavItem eventKey={6} href="#">
                            Ofertas Disponibles
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={7} >
                            <i className="fa fa-cog" ></i>
                        </NavItem>
                        <NavItem eventKey={8} >
                            <i className="fa fa-question"></i>
                        </NavItem>
                    </Nav>
                </div>
        }

        return (
            <div className="navbar-border">
                <div className="navbar-logo">
                    <Link to='/'>
                        <h1 className="RUIFW-brand RUIFW-col-6 RUIFW-sm-6" >
                            <span className="RUIFW-sr sr-only sr-only"></span>
                        </h1>
                    </Link>
                    <div className="navbar-contact">
                        <a href=""  title="Términos y Condiciones">Términos y Condiciones &nbsp;&nbsp;</a>
                        <a href=""  title="Contacto">Contacto</a>
                    </div>
                </div>
                <Navbar>
                {loginPage}
                </Navbar>

        </div>
        );
      }
}

export default Header;


