import React, { Component } from 'react';
import Routes from './routes';
import Footer from './components/Footer/Footer';
import { FormGroup, FormControl } from 'react-bootstrap';
// import { addLocaleData, IntlProvider } from 'react-intl';
// import messages from './components/I18n/messages';
// import en from 'react-intl/locale-data/en';
// import es from 'react-intl/locale-data/es';
// import { flattenMessages } from './components/I18n/Utils';
// import { connect } from 'react-redux';

class App extends Component {

  render() {
    // console.log(this.props.users);
    // addLocaleData([...en, ...es]);
    // let users = this.props.users;
    // console.log(users)
    return (
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

        <div className="off-canvas-content" data-off-canvas-content>
            
            <Routes />
            <hr/>
          <Footer/>
        </div>
        </div>

    );
  }
}

export default App;
