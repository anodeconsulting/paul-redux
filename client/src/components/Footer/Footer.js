import React, { Component } from "react";
import "./Footer.css";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <div className="row">
          <div className="main-footer">
            <span>© Sponsored by NextPathway Inc.</span>
          </div>
        </div>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps)(Footer);
// export default Footer;
