import React, { Component } from "react";
import { Link } from "react-router-dom";


class Nav extends Component {
  render() {
    return <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/todo">To do</Link>
      <Link to="/weather">Weather</Link>

    </nav>;
  }
}

export default Nav;
