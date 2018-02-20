import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
  
  class TableTransfer extends Component {
    
    render() {
        const item = this.props.items;

        return(
            <div>
                <BootstrapTable
                data={ item }
                hover>
                <TableHeaderColumn dataField='name' isKey dataSort>Nombre</TableHeaderColumn>
                <TableHeaderColumn dataField='rut' dataSort>RUT</TableHeaderColumn>
                <TableHeaderColumn dataField='bank' dataSort>Banco de Destino</TableHeaderColumn>
                <TableHeaderColumn dataField='phone' dataSort>N° de Cuenta</TableHeaderColumn>
                <TableHeaderColumn dataField='email' dataSort>Email</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default TableTransfer;