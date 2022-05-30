import React, { Component } from "react";
import DetailMoviePage from "../pages/DetailMoviePage";
import DetailMoviePageMobile from "../pages/DetailMoviePageMobile";

export default class DetailMoviePageTemplate extends Component {
  render() {
    if (window.innerWidth >= 768) return <DetailMoviePage history={this.props.history} match={this.props.match} />;
    else return <DetailMoviePageMobile history={this.props.history} match={this.props.match} />;
  }
}
