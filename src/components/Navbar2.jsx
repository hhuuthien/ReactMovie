import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar2 extends Component {
  state = {
    isShowNavBar: false,
  };

  toggleNavBar() {
    this.setState({
      isShowNavBar: !this.state.isShowNavBar,
    });
  }

  render() {
    return (
      <div className="navbar2-main">
        <i
          className="fa-solid fa-bars"
          onClick={() => {
            this.toggleNavBar();
          }}
        ></i>
        <div className={this.state.isShowNavBar ? "navbar2-real navbar2-show" : "navbar2-real"}>
          <div className="navbar2-blank">
            <i className="fa-solid fa-xmark" onClick={() => this.toggleNavBar()} />
          </div>
          <ul>
            <li>
              <NavLink
                to="/movie"
                onClick={() => {
                  this.toggleNavBar();
                }}
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tvshow"
                onClick={() => {
                  this.toggleNavBar();
                }}
              >
                TV Shows
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                onClick={() => {
                  this.toggleNavBar();
                }}
              >
                People
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                onClick={() => {
                  this.toggleNavBar();
                }}
              >
                More
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={this.state.isShowNavBar ? "overlay overlay-show" : "overlay"}
          onClick={() => {
            this.toggleNavBar();
          }}
        ></div>
      </div>
    );
  }
}
