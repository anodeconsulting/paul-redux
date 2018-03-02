import React, {Component} from 'react';
import {Table, Modal, Button} from 'react-bootstrap';

class MyLargeModal extends Component {

    handleClick(){
        window.print();
    }

    render() {
      return (
        <div>
        <Modal
          {...this.props}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header>
            <div>
                <div className="navbar-logo-modal">
                    <h1 className="RUIFW-brand-modal col-sm-10">
                        <span className="RUIFW-sr sr-only sr-only"></span>
                    </h1>
                    <button className="floatRight" onClick={this.props.onHide}>x</button>
                </div>
                <div>
                    <span className="modal-text">Comprobante de Transacción</span>
                    <span onClick={this.handleClick.bind(this)}><a className="print-icon-modal"></a></span>
                </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div>
                <Table striped bordered condensed hover>              
                    <tbody>
                        <tr>
                        <td>Fecha Contable</td>
                        <td>27/06/2016</td>
                        </tr>
                        <tr>
                        <td>Descripción</td>
                        <td>Compra en Walmart<br />
                            Compra con Tarjeta de Crédito</td>
                        </tr>
                        <tr>
                        <td>De</td>
                        <td>Tarjeta de Crédito Alexis *** 0081</td>
                        </tr>
                        <tr>
                        <td>A</td>
                        <td>Líder</td>
                        </tr>
                        <tr>
                        <td>Ciudad y País</td>
                        <td>Santiago, Chile</td>
                        </tr>
                        <tr>
                        <td>Monto</td>
                        <td>$ 334.155</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
        </div>
      );
    }
}

export default MyLargeModal;