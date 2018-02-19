import React, { Component } from 'react';
import './Header.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import Redirect from "react-router-dom/es/Redirect";
import { Link } from "react-router-dom";

class Header extends Component {
      // constructor(){
      //     super();
      //     this.
      //   }

      render() {
      let loginPage;
        if(window.location.pathname !== '/react/'){
            loginPage= <div className="navbar-content">
                            <div className="navbar-left">
                                <a className="navbar-brand">Mis Productos</a>
                                <a className="navbar-brand">Mis Movimientos</a>
                                <a className="navbar-brand">Pagar <i className="fa fa-caret-down"></i></a>
                                <a className="navbar-brand">Transferir <i className="fa fa-caret-down"></i></a>
                                <a className="navbar-brand">Invertir <i className="fa fa-caret-down"></i></a>
                                <a className="navbar-brand">Ofertas Disponibles <i className="fa fa-caret-down"></i></a>
                            </div>
                            <div className="navbar-right">
                                <a className="navbar-brand"><i className="fa fa-cog" ></i></a>
                                <a className="navbar-brand"><i className="fa fa-question"></i></a>
                            </div>
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
                  <Nav>
                      <NavItem eventKey={1} href="#">
                          Mis Productos
                      </NavItem>
                      <NavItem eventKey={2} href="#">
                          Mis Movimientos
                      </NavItem>
                      <NavDropdown eventKey={3} title="Pagar">
                          <MenuItem eventKey={3.1}>Action</MenuItem>
                      </NavDropdown>
                      <NavDropdown eventKey={4} title="Transferir">
                          <MenuItem eventKey={4.1}>Action</MenuItem>
                      </NavDropdown>
                      <NavDropdown eventKey={5} title="Invertir">
                          <MenuItem eventKey={5.1}>Action</MenuItem>
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
                  </Navbar>
            </div>
        );
      }
}

export default Header;

{/*
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
    <nav className="navbar navbar-expand-md navbar-light main-nav">
        {loginPage}
    </nav>
</div>*/}
