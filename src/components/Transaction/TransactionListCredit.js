import React, { Component } from 'react';
import Transaction from '../Transaction/Transaction';
import CreditCard from '../CreditCard/CreditCard';
import Mortgage from '../Mortgage/Mortgage';
import Loan from '../Loan/Loan';

// import { location } from 'react-router';

export default class TransactionListCredit extends Component{

    render(){
        // const item = this.props.item;
        // let pathName = this.props.location.pathname;
        let type = this.props.location.pathname.split('/')[2];
        // let module = 
        // <div className="product-title">
        // <span className="product-name">{pathName.split('/')[3]}</span> 
        // <span className="product-amt">$ 222</span>
        // </div>;

        let moduleType = null;
        if(type === 'mortgage'){ 
            moduleType= <Mortgage location = {this.props.location}/>     
        }else if(type ==='lineofcredit'){
            moduleType = <Transaction location = {this.props.location}/>
        }else if(type ==='loan'){
            moduleType = <Loan location = {this.props.location}/>
        }else{
            moduleType = <CreditCard location = {this.props.location}/>
        }
        return(
            <div>
                {moduleType}
            </div>
        )
    }
}

//make sure all props are required
