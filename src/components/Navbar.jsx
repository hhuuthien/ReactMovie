import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-main">
        <ul>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">TV Shows</a>
          </li>
          <li>
            <a href="">People</a>
          </li>
          <li>
            <a href="">More</a>
          </li>
        </ul>
      </div>
    );
  }
}
