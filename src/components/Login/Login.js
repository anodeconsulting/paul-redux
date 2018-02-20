import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';
// import { Button } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";

class Login extends Component {

    constructor(){
        super();
       
        this.state = {
         username: '',
         password: '',
         redirectToReferrer: false
        };
    
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    
      }

    login() {      
        this.setState({redirectToReferrer: true})
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/account'}/>)
        }
        console.log("login page");
        return (
            <section >
                <Link to="/account/123">Transactions</Link> <br />
                <Link to="/pay/mutualfund">mutualfund</Link><br />
                <Link to="pay">Pay</Link>  
                <form className="form-signin">
                    <h1 className=" h1title">Acceso Clientes Persona</h1>
                    <div className="row">
                        <div className="RUIFW-content-main RUIFW-col-9 col-md-9 col-sm-9">
                            <div className="wizard-form-content wrapfrom">
                                <div className="RUIFW-row row">
                                    <div className="col-sm-4">
                                        <label  className="">RUT</label>
                                        <input type="text" id="inputEmail" className="form-control inputwidth"  placeholder="Email address" ></input>
                                    </div>
                                </div>
                                <div className="RUIFW-row row">
                                    <div className="col-sm-4">
                                        <label  className="">Contraseña</label>
                                        <input type="password" id="inputPassword" className="form-control inputwidth"   placeholder="Password" ></input>
                                    </div>
                                </div>
                                <div className="RUIFW-row row">
                                    <div className="forgetPassword col-sm-4" >
                                        <a href="">¿Olvidaste tu contraseña?</a>
                                    </div>
                                </div>

                                <div className="btn-holder">
                                    <button className="btn login-btn " type="submit" onClick={this.login} ><i className="fa fa-lock" aria-hidden="true"></i> Ingresar</button>
                                </div>
                            </div>
                        </div>

                        <div className="RUIFW-content-side RUIFW-col-3 col-md-3 col-sm-3">
                            <RightBox/>
                        </div>
                    </div>
                </form>
            </section>
          );
    }
}

export default Login;