import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Calendar from "../Calendar/Calendar";
import {Tabs, Tab} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

function priceFormatter(cell, row) {
    return `$ ${cell}`;
  }
  
  class Table extends Component {
  
    //Constructor 
    constructor(props) {
      super(props);
    }
    
    render() {
        const users = [];
        users.push({
            name: 'LEONEL',
            rut: '11.000.000-k',
            bank: 'Banco de Chile',
            phone:'123456683',
            Email:'qwert@scotiabank.com'          
        });
        users.push({
            name: 'CARLOS',
            rut: '11.000.000-k',
            bank: 'Scotiabank',
            phone:'564534362',
            Email:'qwert@scotiabank.com'          
        });
        const item = this.props.items;
        return(
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title={<FormattedMessage id='table.tab1' />}>
                <br />
                <div>
                    <BootstrapTable
                    data={ users }
                    search={ true }
                    hover
                    pagination>
                    <TableHeaderColumn dataField='bank' isKey dataSort><FormattedMessage id='table.thirdparty.head1' /></TableHeaderColumn>
                    <TableHeaderColumn dataField='name' searchable={ false }><FormattedMessage id='table.thirdparty.head2' /></TableHeaderColumn>
                    <TableHeaderColumn dataField='phone' dataFormat={ priceFormatter } searchable={ false }><FormattedMessage id='table.thirdparty.head3' /></TableHeaderColumn>
                    </BootstrapTable>
                </div>
                </Tab>
                <Tab eventKey={2} title={<FormattedMessage id='table.tab2' />}>
                    <h5>No hay transacciones</h5>
                </Tab>
            </Tabs> 
            
        );
    }
}

export default Table;