import React, { Component } from 'react';

export default class TransactionList extends Component{
    render(){
        const item = this.props.item;
        return(
            <tbody key={item.id}>
                <tr>
                    <td>{item.posted_date}</td>
                    <td>{item.description}</td>
                    <td>{item.transaction_amount.amount}</td>
                </tr>
            </tbody>
        )
    }
}

//make sure all props are required
