import React, { Component } from "react";
import { connect } from "react-redux";
import Movie1 from "../components/Movie1";
import Movie2 from "../components/Movie2";
import Movie3 from "../components/Movie3";
import Movie4 from "../components/Movie4";

class HomePage extends Component {
  render() {
    return (
      <div className={this.props.isShowNavbar ? "home-page" : "home-page expand"}>
        <Movie1 />
        <Movie2 />
        <Movie3 />
        <Movie4 />
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
