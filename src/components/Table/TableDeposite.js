import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Calendar from "../Calendar/Calendar";
import {Tabs, Tab} from 'react-bootstrap';

function priceFormatter(cell, row) {
    return `$ ${cell}`;
  }
  
  class TableDeposite extends Component {
  
    //Constructor 
    constructor(props) {
      super(props);
    }
    
    render() {
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
                    <TableHeaderColumn dataField='posted_date' isKey dataSort>Fecha</TableHeaderColumn>
                    <TableHeaderColumn dataField='description' searchable={ false } dataSort>Description</TableHeaderColumn>
                    <TableHeaderColumn dataField='dataMonto' searchable={ false } dataSort>Monto($)</TableHeaderColumn>
                    <TableHeaderColumn dataField='dataSaldo' searchable={ false } dataSort>Saldo($)</TableHeaderColumn>
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

export default TableDeposite;