import React, {Component} from 'react';

class RedDropDownBtn extends Component {
    constructor(props) {
        super(props);

    }



    render(){

        return(
            <span >

              <i className={!this.props.open?"fa fa-square square-btn red":"fa fa-square square-btn white square-border"} aria-hidden="true"></i>
              <i className={!this.props.open?"fa fa-sort-desc arrow-down-btn white":"fa fa-sort-desc arrow-down-btn black"} aria-hidden="true"></i>

            </span>
        )

    }
}

export default RedDropDownBtn;