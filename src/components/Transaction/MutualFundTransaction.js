import React, {Component} from 'react';
import './Transaction.css';
import { Button } from 'react-bootstrap';
import button1 from '../../assets/images/button1.png';
import Table from "../Table/Table";
import RightBox from "../Rightbox/Rightbox";
import TopBox from "../Topbox/Topbox";

class MutualFundTransaction extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            users: ''
        };
    }

    render() {
        return (
            <section>
        <div className="row pushBottom">
          {/* for topbox */}
          <TopBox/>
        </div>
        <div className="row main2">
          <div className="col-md-9 pushRight">
            <div>
              <div className="row" id="Body">  
                {/* react bootstrap table */}
                <Table items={this.state.items}/>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            {/* for right box */}
            <RightBox location = {this.props.location}/>
          </div>
        </div>       
    </section>
        );
    }
}

export default MutualFundTransaction;