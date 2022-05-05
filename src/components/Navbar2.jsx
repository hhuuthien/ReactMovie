import React, { Component } from "react";

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
