import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Calendar from "../Calendar/Calendar";
import {Tabs, Tab} from 'react-bootstrap';
import './Table.css';
function priceFormatter(cell, row) {
    return `$ ${cell}`;
  }
  
class TableDeposite extends Component {
  
    //Constructor 
    constructor(props) {
      super(props);
    }

    expandComponent(row) {
        // console.log(row);
        // let amount = row.dataSaldo;
        // console.log(amount);
        // const partial = [
        //     {
        //         col0: '',
        //         col1: 'Fecha Contable',
        //         col2: '26/06/2016',
        //         col3: 'Imprimir '
        //     },
        //     {
        //         col0: '',
        //         col1: 'Descripción',
        //         col2: 'Compra en Líder',
        //         col3: 'Descargar'
        //     },
        // ]
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
                    <span className="textAlignRight">Imprimir </span><br />
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
        </div>
        // <div>
        //     <BootstrapTable
        //             data={ partial }
        //             >
        //             <TableHeaderColumn dataField='col0' ></TableHeaderColumn>
        //             <TableHeaderColumn dataField='col1' >Fecha Contable</TableHeaderColumn>
        //             <TableHeaderColumn dataField='col2' >Descripción</TableHeaderColumn>
        //             <TableHeaderColumn dataField='col3' isKey>De</TableHeaderColumn>
        //     </BootstrapTable>    
        
        // </div>
        );
      }

    isExpandableRow(row) {
        if (row.id != 0) return true;
          else return false;
      }
    
    render() {
        const item = this.props.items;
        const options = {
            expandRowBgColor: 'rgb(245, 245, 245)'
          };

        
        return(
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" onSelect={ this.afterTabChanged }>
                <Tab eventKey={1} title="Últimos Movimientos">
                <br />
                <div>
                    <BootstrapTable
                    data={ item }
                    options={ options }
                    expandableRow={ this.isExpandableRow }
                    expandComponent={ this.expandComponent }                    
                    search={ true }
                    hover
                    pagination>
                    <TableHeaderColumn dataField='id' isKey dataSort hidden>Transaction ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='posted_date' dataSort>Fecha</TableHeaderColumn>
                    <TableHeaderColumn dataField='description' columnClassName='td-column-style' searchable={ false } dataSort>Description</TableHeaderColumn>
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