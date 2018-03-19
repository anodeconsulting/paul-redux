import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Tabs, Tab} from 'react-bootstrap';
import MyLargeModal from './MyLargeModal';
import Calendar from "../Calendar/Calendar";
import { FormattedMessage } from 'react-intl';

class ExtraComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          lgShow: false
        };
    }

    render() {
      let lgClose = () => this.setState({ lgShow: false });
      return (
        <div className="row">
            <div className="col-sm-12 col-style">
                <div className="col-sm-2">
                    <span></span>
                </div>
                <div className="col-sm-4">
                    <span>Fecha Contable</span>
                </div>
                <div className="col-sm-4">
                    <span>26/06/2016</span>
                </div>
                <div className="col-sm-2">
                    <span className="textAlignRight" onClick={() => this.setState({ lgShow: true })}>Imprimir </span><br />
                </div>
            </div><br />
            <div className="col-sm-12 col-style">
                <div className="col-sm-2">
                    <span></span>
                </div>
                <div className="col-sm-4">
                    <span>Descripción</span>
                </div>
                <div className="col-sm-4">
                    <span>Compra en Líder</span><br />
                    <span>Compra con Tarjeta de Crédito</span>
                </div>
                <div className="col-sm-2">
                    <span className="textAlignRight">Descargar</span><br />
                    <span className="textAlignRight">PDF</span><br />
                </div>
            </div><br />
            <div className="col-sm-12 col-style">
                <div className="col-sm-2">
                    <span></span>
                </div>
                <div className="col-sm-4">
                    <span>De</span>
                </div>
                <div className="col-sm-4">
                    <span>Tarjeta de Crédito *** 0008</span>
                </div>
                <div className="col-sm-2">
                    <span className="textAlignRight"></span><br />
                </div>
            </div>
            <div className="col-sm-12 col-style">
                <div className="col-sm-2">
                    <span></span>
                </div>
                <div className="col-sm-4">
                    <span>A</span>
                </div>
                <div className="col-sm-4">
                    <span>Líder</span>
                </div>
                <div className="col-sm-2">
                    <span className="textAlignRight"></span><br />
                </div>
            </div>
            <div className="col-sm-12 col-style">
                <div className="col-sm-2">
                    <span></span>
                </div>
                <div className="col-sm-4">
                    <span>N° de Tarjeta</span>
                </div>
                <div className="col-sm-4">
                    <span>*0008</span>
                </div>
                <div className="col-sm-2">
                    <span className="textAlignRight"></span><br />
                </div>
            </div>
            <div className="col-sm-12 col-style">
                <div className="col-sm-2">
                    <span></span>
                </div>
                <div className="col-sm-4">
                    <span>Ciudad y País</span>
                </div>
                <div className="col-sm-4">
                    <span>Santiago, Chile</span>
                </div>
                <div className="col-sm-2">
                    <span className="textAlignRight"></span><br />
                </div>
            </div>
            <div className="col-sm-12 col-style">
                <div className="col-sm-2">
                    <span></span>
                </div>
                <div className="col-sm-4">
                    <span>Monto</span>
                </div>
                <div className="col-sm-4">
                    <span>$ 100</span>
                </div>
                <div className="col-sm-2">
                    <span className="textAlignRight"></span><br />
                </div>
            </div>
            <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
        </div>
      );
    }
  }

// function priceFormatter(cell, row) {
//     return `$ ${cell}`;
//   }
  
  class TableCredit extends Component {
  
    //Constructor 
    constructor(props) {
      super(props);
      this.state = {
        lgShow: false
      };
    }

    expandComponent(row) {
        return (
            <ExtraComponent />
        );
      }

    isExpandableRow(row) {
        if (row.id !== 0) return true;
          else return false;
      }
    
    render() {
        const users = [];
        users.push({
            id: 1,
            date: '13/03/2016',
            couta: '004',
            estado: 'Pendiente',
            valor:'2.563'
        });
        users.push({
            id: 2,
            date: '12/03/2016',
            couta: '003',
            estado: 'Pendiente',
            valor:'3.143'
         
        });
        users.push({
            id: 3,
            date: '01/01/2016',
            couta: '002',
            estado: 'Pendiente',
            valor:'1.222'
         
        });
        // const item = this.props.items;
        const options = {
            expandRowBgColor: 'rgb(245, 245, 245)'
          };
        return(
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title={<FormattedMessage id='table.tab1' />}>
                <br />
                <div>
                    <BootstrapTable
                    data={ users }
                    options={ options }
                    expandableRow={ this.isExpandableRow }
                    expandComponent={ this.expandComponent }                    
                    search={ true }
                    hover
                    pagination>
                    <TableHeaderColumn dataField='id' isKey hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='date' dataSort><FormattedMessage id='table.creditcard.head1' /></TableHeaderColumn>
                    <TableHeaderColumn dataField='couta' columnClassName='td-column-style' searchable={ false } dataSort><FormattedMessage id='table.creditcard.head2' /></TableHeaderColumn>
                    <TableHeaderColumn dataField='estado' searchable={ false } dataSort><FormattedMessage id='table.creditcard.head3' /></TableHeaderColumn>
                    <TableHeaderColumn dataField='valor' searchable={ false } dataSort><FormattedMessage id='table.creditcard.head4' /> ($)</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                </Tab>
                <Tab eventKey={2} title={<FormattedMessage id='table.tab2' />}>
                    {/* <h5>No hay transacciones</h5> */}
                    <Calendar />
                </Tab>
            </Tabs> 
            
        );
    }
}

export default TableCredit;