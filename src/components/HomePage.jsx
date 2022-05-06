import React, { Component } from "react";
import ModalMovie from "./ModalMovie";
import Movie1 from "./Movie1";
import Movie2 from "./Movie2";
import Movie3 from "./Movie3";
import Movie4 from "./Movie4";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Movie1 />
        <Movie2 />
        <Movie3 />
        <Movie4 />
        <ModalMovie />
      </div>
    );
  }
}
