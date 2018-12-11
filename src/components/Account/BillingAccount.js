import React, { Component } from "react";
import "./BillingAccount.css";
import { connect } from "react-redux";
import {
  PanelGroup,
  Panel,
  FormGroup,
  FormControl,
  Col,
  ControlLabel
} from "react-bootstrap";

class BillingAccount extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: "1"
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    let accountInfo = (
      <div>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Account ID:
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Email:
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>
      </div>
    );
    return (
      <section>
        <h4>Billing Account Details</h4>
        <PanelGroup
          accordion
          id="accordion-controlled-example"
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
        >
          <Panel eventKey="1">
            <Panel.Heading>
              <Panel.Title toggle>Account Basic Information</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>{accountInfo}</Panel.Body>
          </Panel>
          <Panel eventKey="2">
            <Panel.Heading>
              <Panel.Title toggle>Contact Information</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>Su</Panel.Body>
          </Panel>
          <Panel eventKey="3">
            <Panel.Heading>
              <Panel.Title toggle>Payment Method</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>Su</Panel.Body>
          </Panel>
          <Panel eventKey="4">
            <Panel.Heading>
              <Panel.Title toggle>Subscription</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>Su</Panel.Body>
          </Panel>
          <Panel eventKey="5">
            <Panel.Heading>
              <Panel.Title toggle>Security</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>Su</Panel.Body>
          </Panel>
          <Panel eventKey="6">
            <Panel.Heading>
              <Panel.Title toggle>Others</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>Su</Panel.Body>
          </Panel>
        </PanelGroup>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps)(BillingAccount);
