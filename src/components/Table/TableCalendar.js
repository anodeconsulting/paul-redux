import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Calendar from "../Calendar/Calendar";
import {Table, Tabs, Tab, Modal, Button} from 'react-bootstrap';
import './Table.css';
import MyLargeModal from './MyLargeModal';
// import ExtraComponent from "./TableDeposite";

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
                        <span>A / Descripción</span>
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

function priceFormatter(cell, row) {
    return `$ ${cell}`;
}

class TableCalendar extends Component {

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
        if (row.id != 0) return true;
        else return false;
    }

    render() {
        const item = this.props.items;
        const options = {
            expandRowBgColor: 'rgb(245, 245, 245)'
        };
        return(
            <BootstrapTable
                data={ item }
                options={ options }
                expandableRow={ this.isExpandableRow }
                expandComponent={ this.expandComponent }
                hover
                pagination>
                <TableHeaderColumn dataField='id' isKey dataSort hidden>Transaction ID</TableHeaderColumn>
                <TableHeaderColumn dataField='posted_date' dataSort>Fecha</TableHeaderColumn>
                <TableHeaderColumn dataField='description' columnClassName='td-column-style' searchable={ false } dataSort>A / Descripción</TableHeaderColumn>
                <TableHeaderColumn dataField='de' searchable={ false } dataSort>De</TableHeaderColumn>
                <TableHeaderColumn dataField='dataMonto' searchable={ false } dataSort>Monto($)</TableHeaderColumn>
            </BootstrapTable>

        );
    }
}

export default TableCalendar;