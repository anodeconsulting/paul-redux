import React, {Component} from 'react';
import './Tab.css';
import { Button } from 'react-bootstrap';
import button1 from '../../assets/images/button1.png';
import TableThirdParty from "../Table/TableThirdParty";
import { FormattedMessage } from 'react-intl';

class Tab1 extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            users: ''
        };
    }

    render() {
        const users = [];
        users.push({
            name: 'LEONEL',
            rut: '11.000.000-k',
            bank: 'Banco de Chile',
            phone:'123456683',
            Email:'qwert@scotiabank.com'          
        });
        users.push({
            name: 'CARLOS',
            rut: '11.000.000-k',
            bank: 'Scotiabank',
            phone:'564534362',
            Email:'qwert@scotiabank.com'          
        });
        return (
            <div>
                <div className="wizard-form-title">
                    <FormattedMessage id='transfer_thirdparty.step1.title' />    
                </div>
                <div className="RUIFW-col-12 contenttbs pad-lft-30 pad-right-30 col-sm-12">              
                    <div className="RUIFW-row mrgn-btm-10 row">
                        <div className="RUIFW-col-6 col-sm-6">
                            <h5 className="mrgn-btm-5 mrgn-top-5"><FormattedMessage id='transfer_thirdparty.step1.head' />   (2)</h5>
                        </div>
                        <div className="RUIFW-col-6 txt-right col-sm-6">
                            <span><img width="70" src={button1} alt="scotia button1" /></span>   
                        </div>
                    </div>
                    <TableThirdParty items={users} />
                    
                    
                </div>       
            </div>
        );
    }
}

export default Tab1;