import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Calendar from "../Calendar/Calendar";
import {Tabs, Tab} from 'react-bootstrap';

function priceFormatter(cell, row) {
    return `$ ${cell}`;
  }
  
  class Table extends Component {
  
    //Constructor 
    constructor(props) {
      super(props);
    }
    
    render() {
        // const users = [];
        // users.push({
        //     name: 'LEONEL',
        //     rut: '11.000.000-k',
        //     bank: 'Banco de Chile',
        //     phone:'123456683',
        //     Email:'qwert@scotiabank.com'          
        // });
        // users.push({
        //     name: 'CARLOS',
        //     rut: '11.000.000-k',
        //     bank: 'Scotiabank',
        //     phone:'564534362',
        //     Email:'qwert@scotiabank.com'          
        // });
        const item = this.props.items;
        return(
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Últimos Movimientos">
                <br />
                <div>
                    <BootstrapTable
                    data={ item }
                    search={ true }
                    hover
                    pagination>
                    <TableHeaderColumn dataField='due_date' isKey dataSort>Fecha</TableHeaderColumn>
                    <TableHeaderColumn dataField='desc' searchable={ false } dataSort>Descripción</TableHeaderColumn>
                    <TableHeaderColumn dataField='cuenta' searchable={ false }>Cuenta</TableHeaderColumn>
                    <TableHeaderColumn dataField='dataAmount' dataFormat={ priceFormatter } searchable={ false } dataSort>Monto</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                </Tab>
                <Tab eventKey={2} title="Transacciones Programadas">
                    <h5>No hay transacciones</h5>
                </Tab>
            </Tabs> 
            
        );
    }
}

export default Table;