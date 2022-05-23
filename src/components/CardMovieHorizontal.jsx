import React, { Component } from "react";
import { IMG_500_PREFIX } from "../data/configData";

export default class CardMovieHorizontal extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div
        className="card-movie-horizontal"
        onClick={() => {
          this.props.history.push("/movie/" + movie.id);
        }}
      >
        <div className="image">
          {movie.poster_path === null || movie.poster_path === "" ? <img src={"./img/placeholder.png"} /> : <img src={`${IMG_500_PREFIX}${movie.poster_path}`} />}
        </div>
        <div className="content">
          <a className="title">{movie.title}</a>
          <div className="description">{movie.overview}</div>
        </div>
      </div>
    );
  }
}
