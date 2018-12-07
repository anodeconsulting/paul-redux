import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./Footer.css";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import messages from "../I18n/messages";
import { flattenMessages } from "../I18n/Utils";
import "react-flags-select/css/react-flags-select.css";

class Footer extends Component {
  render() {
    return (
      <IntlProvider
        locale={this.props.users.id}
        messages={flattenMessages(messages[this.props.users.id])}
      >
        <footer className="container">
          <div className="row">
            <div className="main-footer">
              <FormattedMessage id="footer.information" />{" "}
            </div>
          </div>
        </footer>
      </IntlProvider>
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
