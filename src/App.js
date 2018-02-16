import React, { Component } from 'react';
import Routes from './routes';
import Footer from './components/Footer/Footer';

class App extends Component {

  constructor(){
    super();
  }

  render() {
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
