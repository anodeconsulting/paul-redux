import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return (
        <div className="callout primary" id="Header">
        <div className="row column">
          <Link to="/">Header</Link>
        </div>
      </div>
    );
  }
}

export default Header;