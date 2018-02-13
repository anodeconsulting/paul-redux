import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';
import { Button } from 'react-bootstrap';

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
            <div className="row" id="Body">
              <div className="medium-5 columns left">
              <h4>Login</h4>
              <label>Username</label>
              <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
              <label>Password</label>
              <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
              <Button bsStyle='success' type="submit" onClick={this.login}>Login</Button>
              </div>
            </div>
          );
    }
}

export default Login;