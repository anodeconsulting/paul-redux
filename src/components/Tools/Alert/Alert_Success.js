import React, {Component} from 'react';
import { Alert, Button } from 'react-bootstrap';
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
            module = 
                    <Alert bsStyle="success" onDismiss={this.handleDismiss}>
                        <span className="alert-icon"></span>
                        <h4>¡Realizado!</h4>
                        <p>
                        Tu Inversión Nro 8997 por $ 1.000.000 fue tomado con éxito el día 17/01/2017 a la(s) 3:20 PM. 
                        Recibirás un comprobante de aporte firmado en forma física o electrónica, 
                        al domicilio o correo electrónico registrado, dentro de los próximos 30 días.         
                        </p>  
                        <p className="pushMid">
                          <Button bsStyle="default">Nueva Inversión</Button>
                          <Button bsStyle="default">Imprimir</Button>
                          <Button bsStyle="default">Descargar</Button>
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