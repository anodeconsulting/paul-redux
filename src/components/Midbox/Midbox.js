import React, { Component } from "react";
import logo from "../../assets/images/scotiapesoo.png";
import "./Midbox.css";
import { Panel, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

class Midbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      details: ""
    };
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let button = "Pagar";
    let language = this.props.users.id;
    if (language === "en-US") {
      button = "Pay";
    }
    let module = null;
    let moduleText = null;
    if (!this.state.open) {
      moduleText = <FormattedMessage id="midbox.text9" />;
      module = <span className="glyphicon glyphicon-chevron-down" />;
    } else {
      moduleText = <FormattedMessage id="midbox.text10" />;
      module = <span className="glyphicon glyphicon-chevron-up" />;
    }

    let module1 = null;
    const details = Number(this.props.details);
    const curCode = this.props.currency;
    const type = this.props.type;
    // console.log(type);
    let ratio = null;
    let base = null;
    if ("deposite" === type) {
      base = 4102110.88;
      ratio = (details * 100) / base;
      if (details) {
        module1 = (
          <div
            className="account-balance-container row pushRight"
            id="cc_balance_container_id"
          >
            <div className="RUIFW-col-12  mrgn-btm-15 col-sm-12 col-sm-12">
              <div className="RUIFW-col-4 col-sm-4 col-sm-4">
                <span className="data-label">
                  <FormattedMessage id="midbox.deposite.text1" />
                </span>
                <div className="data">
                  <label className="leap-data">
                    {curCode} {details}
                  </label>
                </div>
              </div>
              <div className="RUIFW-col-4 col-sm-4 col-sm-4">
                <span className="data-label">
                  <FormattedMessage id="midbox.deposite.text2" />
                </span>
                <div className="data">
                  <label className="leap-data">{curCode} 150</label>
                </div>
              </div>
              <div className="RUIFW-col-4 col-sm-4 col-sm-4">
                <span className="data-label">
                  <FormattedMessage id="midbox.deposite.text3" />
                </span>
                <div className="data">
                  <label className="leap-data">
                    {curCode} {details + 150}
                  </label>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
        );
      }
    } else {
      if ("creditcard" === type) {
        base = 8000000.09;
        ratio = (details * 100) / base;
      } else if ("mortgage" === type) {
        base = 9000000.67;
        ratio = (details * 100) / base;
      } else if ("loan" === type) {
        base = 7000000.67;
        ratio = (details * 100) / base;
      } else {
        base = 4000000.67;
        ratio = (details * 100) / base;
      }
      // console.log(details)
      // console.log(ratio);
      if (details) {
        module1 = (
          <div
            className="account-balance-container row pushRight"
            id="cc_balance_container_id"
          >
            <div className="RUIFW-col-12  mrgn-btm-15 col-sm-12 col-sm-12">
              <h6>
                {" "}
                <FormattedMessage id="midbox.title1" />
                <span id="cc_lbl_credit_limit_id">
                  <a
                    href=""
                    className="RUIFW-tooltip"
                    data-toggle="tooltip"
                    title=""
                    data-placement="auto"
                    data-original-title="Cupo Autorizado en Pesos"
                  >
                    <span className="icon-info-sign" />
                  </a>{" "}
                  <FormattedMessage id="midbox.title2" />: &nbsp;{curCode}{" "}
                  {details}
                </span>
              </h6>
              <div className="progress">
                <ProgressBar bsStyle="success" now={ratio} />
                <div>
                  <span className="sr-only">% Complete (success)</span>
                </div>
              </div>
            </div>
            <div className="clear" />
            <div className="RUIFW-col-12  mrgn-btm-15 col-sm-12 col-sm-12">
              <div className="RUIFW-col-4 col-sm-4 col-sm-4">
                <span className="data-label">
                  <FormattedMessage id="midbox.text1" />
                </span>
                <div className="data">
                  <label className="leap-data">
                    {curCode} {(base * 0.234).toFixed(2)}
                  </label>
                </div>
              </div>
              <div className="RUIFW-col-4 col-sm-4 col-sm-4">
                <span className="data-label">
                  <FormattedMessage id="midbox.text2" />
                </span>
                <div className="data">
                  <label className="leap-data">
                    {curCode} {(base * 0.145).toFixed(2)}
                  </label>
                </div>
              </div>
              <div className="RUIFW-col-4 col-sm-4 col-sm-4">
                <span className="data-label">
                  <FormattedMessage id="midbox.text3" />
                </span>
                <div className="data">
                  <label className="leap-data">
                    {curCode} {(base * 0.567).toFixed(2)}
                  </label>
                </div>
              </div>

              <div className="clear" />
              <div className="mrgn-top-15 row pushRight1">
                <div className="RUIFW-col-4 col-sm-4 col-sm-4 ">
                  <span className="data-label">
                    <FormattedMessage id="midbox.text4" />
                  </span>
                  <div className="data">
                    <label className="leap-data">
                      {curCode} {(base * 0.213).toFixed(2)}
                    </label>
                  </div>
                </div>
                <div className="RUIFW-col-4 col-sm-4 col-sm-4">
                  <span className="data-label ">
                    <FormattedMessage id="midbox.text5" />
                  </span>
                  <div className="data">
                    <label className="leap-data">
                      {curCode} {(base * 0.002).toFixed(2)}
                    </label>
                  </div>
                </div>
              </div>
              <div className="clear" />
            </div>
            <div className="RUIFW-col-12 alignright mrgn-top-15 col-sm-12 col-sm-12">
              <span className="veralignmiddle pull-left text-left">
                <span>
                  <img src={logo} alt="scotia logo" />
                </span>
              </span>
              <span className="inlineBlock35 veralignmiddle">
                <span className="data-label">
                  <FormattedMessage id="midbox.text6" />
                </span>
                <br />
                <span id="data_paymentDueDate">
                  <label className="leap-data">
                    <FormattedMessage id="midbox.text7" />
                  </label>
                </span>
              </span>
              <Link to="/pay">
                <input
                  id="transDetailsForm"
                  name="transDetailsForm:ccpaymentbtn"
                  value={button}
                  className="RUIFW-btn-primary mrgn-lft-10 btn btn-danger btn btn-danger btn btn-danger"
                  type="submit"
                />
              </Link>
            </div>
            <div className="clear" />
            <a
              className="toggle-btn col-md-12 ico-angle-up"
              onClick={this.handleClick.bind(this)}
            >
              <p>
                {" "}
                {moduleText}
                {module}
              </p>
            </a>

            <Panel
              id="collapsedDiv"
              expanded={this.state.open}
              onToggle={() => this.handleClick.bind(this)}
            >
              <Panel.Collapse>
                <Panel.Body>
                  <div className="well col-sm-12">
                    <div className="col-sm-4">
                      <span>
                        <FormattedMessage id="midbox.expand.text1" />
                      </span>
                      <br />
                      <br />
                      <span>26/06/2016</span>
                    </div>
                    <div className="col-sm-4">
                      <span>
                        <FormattedMessage id="midbox.expand.text2" />
                      </span>
                      <br />
                      <br />
                      <span>26/06/2016</span>
                    </div>
                    <div className="col-sm-4">
                      <span>
                        <FormattedMessage id="midbox.expand.text3" />
                      </span>
                      <br />
                      <br />
                      <span>$ 333.322</span>
                    </div>
                  </div>
                  <div className="well col-sm-12">
                    <div className="col-sm-4">
                      <span>
                        <FormattedMessage id="midbox.expand.text4" />
                      </span>
                      <br />
                      <br />
                      <span>USD 10.122,20</span>
                    </div>
                    <div className="col-sm-4">
                      <span>
                        <FormattedMessage id="midbox.expand.text5" />
                      </span>
                      <br />
                      <br />
                      <span>USD 12.111,12</span>
                    </div>
                    <div className="col-sm-4">
                      <span>
                        <FormattedMessage id="midbox.expand.text6" />
                      </span>
                      <br />
                      <br />
                      <span>USD 22.456,32</span>
                    </div>
                  </div>
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
          </div>
        );
      }
    }

    return <div>{module1}</div>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps)(Midbox);
// export default Midbox;
