import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';
import './Footer.css';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import messages from '../I18n/messages';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import { flattenMessages } from '../I18n/Utils';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

class Footer extends Component {
    handleLan(e){
        let language;
        if(e === "CL"){
            let time = new Date().toLocaleDateString('es',{ weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' });
            this.setState({localTime: time});
            language = "es-ES";
        }else if(e === "CA"){
            language = "en-US";
            let time = new Date().toLocaleDateString('en',{ weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' });
            this.setState({localTime: time});
        }
        this.props.dispatch({
            type: 'changeLanguage',
            id: language
        })
    }

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
                  <li> <a>
                      <FormattedMessage id='footer.language' /><ReactFlagsSelect
                      countries={["CL", "CA"]}
                      showSelectedLabel={false}
                      showOptionLabel={false}
                      defaultCountry="CL"
                      onSelect = {this.handleLan.bind(this)}/>
                  </a></li>
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