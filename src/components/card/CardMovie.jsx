import React, { Component } from "react";
import { IMG_500_PREFIX } from "../../data/configData";
import { formatDate } from "../../function/formatDate";

class CardMovie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="cardmovie-main">
        <div className="content">
          <div className="poster">
            <img src={`${IMG_500_PREFIX}${movie.poster_path}`} />
          </div>
          <div className="title">{movie.title}</div>
          {movie.vote_count !== 0 ? (
            <div className="float">
              <i className="fa-solid fa-star star"></i>
              <div className="point">{movie.vote_average}</div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default CardMovie;
