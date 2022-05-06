import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-main">
        <ul>
          <li>
            <NavLink to="/movie">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/tvshow">TV Shows</NavLink>
          </li>
          <li>
            <NavLink to="">People</NavLink>
          </li>
          <li>
            <NavLink to="">More</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
