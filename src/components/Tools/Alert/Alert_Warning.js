import React, {Component} from 'react';
import { Alert } from 'react-bootstrap';
import './Alert.css';

class AlertWarning extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            show: true
        };

       this.handleDismiss = this.handleDismiss.bind(this);
    }

    handleDismiss() {       
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    render(){
        let module=null;
        if(this.state.show){
            module = <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
                <span className="alert-icon-info"></span>
                <h4>¡Importante!</h4>
                <p>
                Las características esenciales de la inversión en este fondo mutuo se encuentran contenidas en su reglamento interno y 
                contrato general de fondos, 
                las que declaro conocer y aceptar en su integridad.
                </p>                       
            </Alert>
        }
        return(
            <div>
                {module}
            </div>
        )

    }
}

export default AlertWarning;