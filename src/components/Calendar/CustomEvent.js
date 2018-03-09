import React, {Component} from 'react'
import { Popover, OverlayTrigger } from "react-bootstrap";

class CustomEvent extends Component {
    constructor(props){
        super(props)
    }


    render(){
    //   console.log(this.props);

      let popoverClickRootClose = (
        <Popover id="popover-positioned-top" title="Popover top">
            <strong>{this.props.title}</strong> Check this info.
        </Popover>
      );

        return (
          <div>
            <OverlayTrigger id="help" trigger="click" placement="left" overlay={popoverClickRootClose}>
                <div>Holy guacamole!</div>
            </OverlayTrigger>

          </div>
        );
    }
}

export default CustomEvent