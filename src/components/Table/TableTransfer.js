import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
  
  class TableTransfer extends Component {
    
    render() {
        const item = this.props.items;

        return(
            <div>
                <BootstrapTable
                data={ item }
                search={ true }
                hover
                pagination>
                <TableHeaderColumn dataField='date' isKey dataSort>Fecha</TableHeaderColumn>
                <TableHeaderColumn dataField='desc' dataSort>Descripción</TableHeaderColumn>
                <TableHeaderColumn dataField='cuenta' dataSort>Cuenta o Tarjeta</TableHeaderColumn>
                <TableHeaderColumn dataField='Estado' dataSort>Estado</TableHeaderColumn>
                <TableHeaderColumn dataField='dataAmount' dataSort>Monto</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default TableTransfer;