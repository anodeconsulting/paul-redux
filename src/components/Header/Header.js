import React, { Component } from 'react';
import './Header.css';
import Redirect from "react-router-dom/es/Redirect";

class Header extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };

        this.changeState = this.changeState.bind(this);

    }

    changeState() {
        this.setState({redirectToReferrer: true})
    }

      render() {
          if (this.state.redirectToReferrer) {
              return (<Redirect to={'/'}/>)
          }

        return (
            <div className="navbar-border">
                <div className="navbar-logo">
                    <h1 className="RUIFW-brand RUIFW-col-6 RUIFW-sm-6" onClick={this.changeState}>
                        <span className="RUIFW-sr sr-only sr-only"></span>
                    </h1>
                    <div className="navbar-contact">
                        <a href=""  title="Términos y Condiciones">Términos y Condiciones &nbsp;&nbsp;</a>
                        <a href=""  title="Contacto">Contacto</a>
                    </div>
                </div>
                <nav className="navbar navbar-expand-md navbar-light main-nav">
                  <div className="navbar-content">
                      <div className="navbar-left">
                          <a className="navbar-brand">Mis Productos</a>
                          <a className="navbar-brand">Mis Movimientos</a>
                          <a className="navbar-brand">Pagar</a>
                          <a className="navbar-brand">Transferir</a>
                          <a className="navbar-brand">Invertir</a>
                          <a className="navbar-brand">Ofertas Disponibles</a>
                      </div>
                      <div className="navbar-right">
                          {/*<a className="navbar-brand"><i className="fa fa-cog" ></i></a>*/}
                          {/*<a className="navbar-brand"><i className="fa fa-question"></i></a>*/}
                      </div>
                  </div>
                </nav>
            </div>
        );
      }
}

export default Header;

