import React, {Component} from 'react';
import './ThirdPartyTransfer.css';
import {Button, Tabs, Tab, TabContainer, TabContent, TabPane} from 'react-bootstrap';
import TabThirdPartyTransferStep1 from '../Tab/TabThirdPartyTransferStep1';
import RightBox from "../Rightbox/Rightbox";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

class ThirdPartyTransfer extends Component {

    constructor(props) {
        super(props);
        // window.scrollTo(0,100);
    }

    render() {
        return (
          <section>
            <div className="row">
                <div className='col-sm-9 divLeft'>
                    <h1>{<FormattedMessage id='transfer_thirdparty.title' />} </h1>        
                        <div>
                            <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                                <Tab eventKey={1} title={<FormattedMessage id='transfer_thirdparty.tab1' />}>
                                    <TabThirdPartyTransferStep1 />
                                </Tab>
                                <Tab eventKey={2} title={<FormattedMessage id='transfer_thirdparty.tab2' />} disabled>
                                    Tab 2 content
                                </Tab>
                                <Tab eventKey={3} title={<FormattedMessage id='transfer_thirdparty.tab3' />} disabled>
                                    Tab 3 content
                                </Tab>
                            </Tabs>
                            <span className="pushBot row">
                                <Button className="accept">{<FormattedMessage id='transfer_thirdparty.accept' />}</Button>
                                <Button className="cancel"><Link to="/account">{<FormattedMessage id='transfer_thirdparty.cancel' />}</Link></Button>                       
                            </span>
                        </div>        
                </div>  
                <div className='col-sm-3'>
                    <RightBox location = {this.props.location}/>
                </div>
            </div>
          </section>
        );
    }
}

export default ThirdPartyTransfer;