import React, {Component} from 'react'
import { Popover, OverlayTrigger } from "react-bootstrap";

class CustomEvent extends Component {
    constructor(props){
        super(props)
    }


    render(){
      let popoverClickRootClose = (
        <Popover id="popover-positioned-top" title="Transacciones Programadas">
            <strong>{this.props.event.title}</strong>

            <ul className="calendar-popup">
                <li>Transferencia entre Cuentas Propias</li>
                <li>De: {this.props.de}</li>
                <li>A: </li>
                <li>Monto: $ {this.props.event.dataMonto}</li>
            </ul>
            <ul className="calendar-popup">
                <li>Transferencia A Terceros</li>
                <li>Banco: {this.props.event.de}</li>
                <li>Destinatario: </li>
                <li>Monto: $ {this.props.event.dataMonto}</li>
            </ul>

        </Popover>
      );

        return (
          <div>
            <OverlayTrigger id="help" trigger="click" placement="top" overlay={popoverClickRootClose} rootClose>
                <div>{this.props.event.title}</div>
            </OverlayTrigger>

          </div>
        );
    }
}

export default CustomEvent