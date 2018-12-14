import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { DropdownButton, Modal, MenuItem } from "react-bootstrap";
import Link from "react-router-dom/es/Link";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShowUser = this.handleShowUser.bind(this);
    this.handleCloseUser = this.handleCloseUser.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleUserSignIn = this.handleUserSignIn.bind(this);
    this.handleHome = this.handleHome.bind(this);

    this.state = {
      show: false,
      showUser: false,
      login: false
    };
  }

  componentDidMount() {
    if (!this.state.login) {
      this.props.history.push("/");
    }
  }

  handleHome() {
    this.props.history.push("/");
  }

  handleUserSignIn() {
    this.props.history.push("/msfui");
  }

  handleSignIn() {
    this.setState({
      show: false,
      login: true
    });
  }

  handleSignOut() {
    this.setState({
      show: false,
      login: false
    });
    this.props.history.push("/");
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: !this.state.show });
  }

  handleCloseUser() {
    this.setState({ showUser: false });
  }

  handleShowUser() {
    this.setState({ showUser: !this.state.showUser });
  }

  render() {
    let logo = (
      <img
        src={require("../../assets/images/Mercury_Logo.png")}
        className="logo"
        alt="Logo"
        onClick={this.handleHome}
      />
    );
    let loginIcon = null;
    let login = null;

    if (!this.state.login) {
      loginIcon = <span className="glyphicon glyphicon-home" />;
      login = (
        <DropdownButton
          bsSize="small"
          bsStyle="default"
          title="Sign In"
          id="login"
        >
          <MenuItem eventKey="1" onClick={this.handleShow}>
            Manage Billing Account
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="2" onClick={this.handleShowUser}>
            Access Microservice Factory
          </MenuItem>
          <MenuItem eventKey="3">Access Datapower Factory</MenuItem>
        </DropdownButton>
      );
    } else {
      loginIcon = <span className="glyphicon glyphicon-user" />;
      login = (
        <DropdownButton
          bsSize="small"
          bsStyle="default"
          title="Admin"
          id="admin"
        >
          <MenuItem eventKey="1">Edit Billing Detail</MenuItem>
          <MenuItem eventKey="2">Invite Users</MenuItem>
          <MenuItem eventKey="3">Invoices</MenuItem>
          <MenuItem eventKey="4">Payments</MenuItem>
          <MenuItem eventKey="5" onClick={this.handleSignOut}>
            Sign Out
          </MenuItem>
        </DropdownButton>
      );
    }

    let billingModal = (
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
                    <input type="checkbox" id="rememberMe" defaultChecked />
                    <span>Remember me</span>
                  </label>
                </div>
                <Link to={`/billing-account`}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleSignIn}
                  >
                    Sign In
                  </button>
                </Link>
                <p />
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
    let accessModal = (
      <Modal
        data-keyboard="false"
        data-backdrop="static"
        show={this.state.showUser}
        onHide={this.handleCloseUser}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In to Access Microservice Factory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-8 col-md-offset-2" />
            <div className="col-md-12">
              <form>
                <div className="form-group">
                  <label htmlFor="username1">User ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username1"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password1"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={this.handleUserSignIn}
                >
                  Sign In
                </button>
                <p />
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
    return (
      <div className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            {logo}
            <span>Service Factory</span>
          </div>
          <div className="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <span className="hidden-sm">
                  {loginIcon}
                  {login}
                </span>
                {billingModal}
                {accessModal}
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
