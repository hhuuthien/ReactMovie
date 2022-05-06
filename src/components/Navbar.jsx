import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-main">
        <div className="navbar-blank"></div>
        <div className="navbar-group">
          <div className="navbar-group-title">MENU</div>
          <ul>
            <li>
              <NavLink to="/home">
                <i className="fa-solid fa-house"></i>
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/discovery">
                <i className="fa-solid fa-compass"></i>
                <p>Discovery</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <p>Search</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/coming-soon">
                <i className="fa-solid fa-clock"></i>
                <p>Coming soon</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-group">
          <div className="navbar-group-title">YOUR ACCOUNT</div>
          <ul>
            <li>
              <NavLink to="/information">
                <i className="fa-solid fa-user"></i>
                <p>Information</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites">
                <i className="fa-solid fa-heart"></i>
                <p>Favorites</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/bookmarks">
                <i className="fa-solid fa-bookmark"></i>
                <p>Bookmarks</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/history">
                <i className="fa-solid fa-history"></i>
                <p>History</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/log-out">
                <i className="fa-solid fa-right-from-bracket"></i>
                <p>Log out</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-group">
          <div className="navbar-group-title">SYSTEM</div>
          <ul>
            <li>
              <NavLink to="/settings">
                <i className="fa-solid fa-gear"></i>
                <p>Settings</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/help">
                <i className="fa-solid fa-circle-question"></i>
                <p>Help</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
