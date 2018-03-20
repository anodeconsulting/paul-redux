import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { FormattedMessage } from 'react-intl';

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
                <TableHeaderColumn dataField='date' isKey dataSort><FormattedMessage id='table.transfer.head1' /></TableHeaderColumn>
                <TableHeaderColumn dataField='desc' dataSort><FormattedMessage id='table.transfer.head2' /></TableHeaderColumn>
                <TableHeaderColumn dataField='cuenta' dataSort><FormattedMessage id='table.transfer.head3' /></TableHeaderColumn>
                <TableHeaderColumn dataField='Estado' dataSort><FormattedMessage id='table.transfer.head4' /></TableHeaderColumn>
                <TableHeaderColumn dataField='dataAmount' dataSort><FormattedMessage id='table.transfer.head5' /></TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default TableTransfer;