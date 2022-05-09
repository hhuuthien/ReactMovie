import React, { Component } from "react";
import { connect } from "react-redux";

class DetailMoviePage extends Component {
  render() {
    return <div className={this.props.isShowNavbar ? "detail-movie-page" : "detail-movie-page expand"}>{this.props.match.params.movieID}</div>;
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    isShowNavbar: rootReducer.navbarReducer.isShowNavbar,
  };
};

export default connect(mapStateToProps)(DetailMoviePage);
