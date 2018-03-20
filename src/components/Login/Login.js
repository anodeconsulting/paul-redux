import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';
// import { Button } from 'react-bootstrap';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
// import {AddTransferD2D} from "../../services/AddTransferD2D";
// import {AddTransferD2CC} from "../../services/AddTransferD2CC";
// import {AddCashAdvance} from "../../services/AddCashAdvance";
// import {GetTransferActivities} from "../../services/GetTransferActivities";
// import {GetCCDetails} from "../../services/GetCCDetails";
// import {GetMortgageDetails} from "../../services/GetMortgageDetails";
// import {GetMortgageTransactions} from "../../services/GetMortgageTransactions";

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

    componentDidMount(){
        // AddTransferD2D().then((result) => {
        //     console.log(result);  
        // });
        // AddTransferD2CC().then((result) => {
        //     console.log(result);  
        // });
        // AddCashAdvance().then((result) => {
        //     console.log(result);  
        // });
        // GetTransferActivities().then((result) => {
        //     console.log(result);  
        // });
        // GetCCDetails().then((result) => {
        //     console.log(result);  
        // });
        // GetMortgageDetails().then((result) => {
        //     console.log(result);  
        // });
        // GetMortgageTransactions().then((result) => {
        //     console.log(result);  
        // });
      }

    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/account'}/>)
        }
        return (
            <section >
                {/* <Link to="/account/123">Transactions</Link> <br /> */}
                {/* <Link to="/pay/mutualfund">mutualfund</Link><br /> */}
                {/* <Link to="pay">Pay</Link>   */}
                <form className="form-signin">
                    <h1 className=" h1title"><FormattedMessage id='login.title' /></h1>
                    <div className="row">
                        <div className="RUIFW-content-main RUIFW-col-9 col-md-9 col-sm-9">
                            <div className="wizard-form-content wrapfrom">
                                <div className="RUIFW-row row">
                                    <div className="col-sm-4">
                                        <label  className=""><FormattedMessage id='login.user' /></label>
                                        <input type="text" id="inputEmail" className="form-control inputwidth"  placeholder="Email address" ></input>
                                    </div>
                                </div>
                                <div className="RUIFW-row row">
                                    <div className="col-sm-4">
                                        <label  className=""><FormattedMessage id='login.password' /></label>
                                        <input type="password" id="inputPassword" className="form-control inputwidth"   placeholder="Password" ></input>
                                    </div>
                                </div>
                                <div className="RUIFW-row row">
                                    <div className="forgetPassword col-sm-4" >
                                        <a href=""><FormattedMessage id='login.ask' /></a>
                                    </div>
                                </div>

                                <div className="btn-holder">
                                    <button className="btn login-btn " type="submit" onClick={this.login} ><i className="fa fa-lock" aria-hidden="true"></i> <FormattedMessage id='login.login' /></button>
                                </div>
                            </div>
                        </div>

                        <div className="RUIFW-content-side RUIFW-col-3 col-md-3 col-sm-3">
                            <RightBox location = {this.props.location}/>
                        </div>
                    </div>
                </form>
            </section>
          );
    }
}

export default Login;