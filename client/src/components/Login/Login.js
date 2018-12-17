import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    this.setState({ redirectToReferrer: true });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {}

  render() {
    // if (this.state.redirectToReferrer) {
    //   return <Redirect to={"/account"} />;
    // }

    return (
      <section className="section-plans">
        <div className="row">
          <h2>Choose Your License</h2>
        </div>
        <div className="row">
          <div className="col col-sm-4">
            <div className="plan-box">
              <div className="height-top">
                <h3>Personal</h3>
                <p className="plan-desc">
                  Just started using awesome Module. Great way to boost the hard
                  designing or prototyping process.{" "}
                </p>
              </div>
              <div>
                <span className="green">Free</span>
                <p className="plan-desc-details">
                  Per month billed annualy or $250 from month to month
                </p>
              </div>
              <div>
                <a className="btn btn-buy-bot">Get it</a>
              </div>
            </div>
          </div>
          <div className="col col-sm-4">
            <div className="plan-box border-grey">
              <div>
                <h3>Agency</h3>
                <p className="plan-desc">
                  Also a perfect tool for creative studios and freelancers”{" "}
                </p>
              </div>
              <div>
                <span>
                  <small className="small">$</small>123
                </span>
                <p className="plan-desc-details">
                  Per month billed annualy or $250 from month to month
                </p>
              </div>
              <div>
                <a className="btn btn-buy-bot">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col col-sm-4">
            <div className="plan-box">
              <div>
                <h3>Unlimited</h3>
                <p className="plan-desc">
                  Living in today’s metropolitan world of cellular phones,
                  mobile computers{" "}
                </p>
              </div>
              <div>
                <span>
                  <small className="small">$</small>232
                </span>
                <p className="plan-desc-details">
                  Per month billed annualy or $250 from month to month
                </p>
              </div>
              <div>
                <a className="btn btn-buy-bot">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
