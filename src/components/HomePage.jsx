import React, { Component } from "react";
import { connect } from "react-redux";
import ModalMovie from "./ModalMovie";
import Movie1 from "./Movie1";
import Movie2 from "./Movie2";
import Movie3 from "./Movie3";
import Movie4 from "./Movie4";

class HomePage extends Component {
  render() {
    return (
      <div className={this.props.isShowNavbar ? "home-page" : "home-page expand"}>
        <Movie1 />
        <Movie2 />
        <Movie3 />
        <Movie4 />
        <ModalMovie />
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    isShowNavbar: rootReducer.navbarReducer.isShowNavbar,
  };
};

export default connect(mapStateToProps)(HomePage);
