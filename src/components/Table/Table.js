import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

function priceFormatter(cell, row) {
    return `$ ${cell}`;
  }
  
  class Table extends Component {
  
    //Constructor 
    constructor(props) {
      super(props);
    }
    
    render() {
        const item = this.props.items;
        return(
            <div>
                <BootstrapTable
                data={ item }
                search={ true }
                hover
                pagination>
                <TableHeaderColumn dataField='posted_date' isKey dataSort>Date</TableHeaderColumn>
                <TableHeaderColumn dataField='description' searchable={ false }>Description</TableHeaderColumn>
                <TableHeaderColumn dataField='dataAmount' dataFormat={ priceFormatter } searchable={ false }>Amount</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default Table;