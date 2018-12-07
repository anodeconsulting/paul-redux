import React, { Component } from "react";
import { connect } from "react-redux";
import "react-flags-select/css/react-flags-select.css";
import { withRouter } from "react-router";
import { Modal } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: !this.state.show });
  }

  // showModal = () => {
  //   this.setState({
  //     show: !this.state.show
  //   });
  // };

  render() {
    console.log(this.state.show);
    return (
      <div className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand logo">
              <span>Entry Portal</span>
            </a>
          </div>
          <div className="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a>
                  <span className="hidden-sm" onClick={this.handleShow}>
                    <span className="glyphicon glyphicon-home" />
                    Login
                  </span>
                  <Modal
                    data-keyboard="false"
                    data-backdrop="static"
                    show={this.state.show}
                    onHide={this.handleClose}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Sign in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                          <h1>Sign in</h1>
                        </div>
                        <div className="col-md-8 col-md-offset-2" />
                        <div className="col-md-12">
                          <form>
                            <div className="form-group">
                              <label htmlFor="username">Login</label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="rememberMe">
                                <input
                                  type="checkbox"
                                  id="rememberMe"
                                  defaultChecked
                                />
                                <span>Remember me</span>
                              </label>
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Sign in
                            </button>
                            <p />
                          </form>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/* <LoginModal
                    show={this.state.show}
                    onHide={this.handleClose}
                  /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let change;
  if (state.users.id) {
    change = state.users.id;
  } else {
    change = { id: "es-ES" };
  }
  return {
    change: change
  };
}

export default withRouter(connect(mapStateToProps)(Header));
