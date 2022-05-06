import React, { Component } from "react";
import Movie1 from "./Movie1";
import Movie2 from "./Movie2";
import ModalMovie from "./ModalMovie";

export default class MoviePage extends Component {
  render() {
    return (
      <div className="movie-page">
        <Movie1 />
        <Movie2 />
        <ModalMovie />
      </div>
    );
  }
}
