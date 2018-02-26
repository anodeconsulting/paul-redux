import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Calendar from "../Calendar/Calendar";
import {Tabs, Tab} from 'react-bootstrap';

function priceFormatter(cell, row) {
    return `$ ${cell}`;
  }
  
  class TableCredit extends Component {
  
    //Constructor 
    constructor(props) {
      super(props);
    }
    
    render() {
        const users = [];
        users.push({
            date: '13/03/2016',
            couta: '004',
            estado: 'Pendiente',
            valor:'2.563'
        });
        users.push({
            date: '12/03/2016',
            couta: '003',
            estado: 'Pendiente',
            valor:'3.143'
         
        });
        users.push({
            date: '01/01/2016',
            couta: '002',
            estado: 'Pendiente',
            valor:'1.222'
         
        });
        const item = this.props.items;
        return(
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Últimos Movimientos">
                <br />
                <div>
                    <BootstrapTable
                    data={ users }
                    search={ true }
                    hover
                    pagination>
                    <TableHeaderColumn dataField='date' isKey dataSort>Fecha de Vencimiento</TableHeaderColumn>
                    <TableHeaderColumn dataField='couta' searchable={ false } dataSort>N° Cuota</TableHeaderColumn>
                    <TableHeaderColumn dataField='estado' searchable={ false } dataSort>Estado</TableHeaderColumn>
                    <TableHeaderColumn dataField='valor' searchable={ false } dataSort>Valor Cuota ($)</TableHeaderColumn>
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

export default TableCredit;