import React, {Component} from 'react';
import { Alert, Button } from 'react-bootstrap';
import './Alert.css';
import { FormattedMessage } from 'react-intl';

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
                        <h4><FormattedMessage id='pay_product.step3.successtext1' /></h4>
                        <p>
                        <FormattedMessage id='pay_product.step3.successtext2' />         
                        </p>  
                        <p className="pushMid">
                          <Button bsStyle="default"><FormattedMessage id='pay_product.step3.successtext3' /></Button>
                          <Button bsStyle="default"><FormattedMessage id='pay_product.step3.successtext4' /></Button>
                          <Button bsStyle="default"><FormattedMessage id='pay_product.step3.successtext5' /></Button>
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