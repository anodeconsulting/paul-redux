import React, { Component } from "react";
import { connect } from "react-redux";

class Mongodb extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };
  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ response: res.express });
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    console.log("sending to for creating dummy user");
    const response = await fetch("/api/insert");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <section>
        <h1>mongo connection</h1>
        <p>{this.state.response}</p>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps)(Mongodb);
