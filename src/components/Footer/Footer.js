import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';
import './Footer.css';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import messages from '../I18n/messages';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import { flattenMessages } from '../I18n/Utils';

class Footer extends Component {
    render() {
      var users = this.props.users;
      addLocaleData([...en, ...es]);
      return (
        <IntlProvider locale={this.props.users.id} messages={flattenMessages(messages[this.props.users.id])}>
        <footer className="RUIFW-page-footer noprint main-footer">
          <div className="footerWrap"><FormattedMessage id='footer.information' /> <a href="/"> www.sbif.cl </a></div>
          <div className="RUIFW-row noprint row-margin row row">
              <ul className="RUIFW-nav-footer RUIFW-col-6 col-sm-6 col-sm-6">
                  <li><a href=""><FormattedMessage id='footer.privacy' /> </a></li>
                  <li className="separator">&nbsp;</li>
                  <li><a href=""><FormattedMessage id='footer.security' /></a></li>
                  <li className="separator">&nbsp;</li>
                  <li><a href=""><FormattedMessage id='footer.attentionchannels' /></a></li>
              </ul>
              <ul className=" RUIFW-nav-footer RUIFW-col-6 col-sm-6 col-sm-6 text-right">
                  <li className="copyright">©<script type="text/javascript">document.write(new Date().getFullYear());</script><FormattedMessage id='footer.rightsreserved' /></li>
              </ul>
          </div>

        </footer>
        </IntlProvider>
      );
    }
  }
  
  function mapStateToProps(state){
    return {
        users:state.users
    }
  }
  export default connect(mapStateToProps) (Footer);
  // export default Footer;