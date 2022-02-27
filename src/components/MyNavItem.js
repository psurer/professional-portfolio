import React, { Component } from "react";
import { Link } from "react-router-dom"; // Node module used to provide routing options

class MyNavitem extends Component {
  render() {
    return (
      <li>
        <Link to={this.props.tolink}>{this.props.item}</Link>
      </li>
    );
  }
}
export default MyNavitem;
