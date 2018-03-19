import React, {Component} from 'react';
import { Alert } from 'react-bootstrap';
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
            module = <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
                <span className="alert-icon-info"></span>
                <h4><FormattedMessage id='pay_product.step2.warningtext1' /></h4>
                <p>
                    <FormattedMessage id='pay_product.step2.warningtext2' />
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