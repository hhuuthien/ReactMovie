import React, { Component } from "react";
import { IMG_500_PREFIX } from "../../data/configData";
import CustomImage from "../CustomImage";
import { formatPoint } from "../../function/formatPoint";
import { formatDate } from "../../function/formatDate";

class CardMovieHorizontal extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="cardmovie-horizontal-main">
        <div className="content">
          <div className="poster">
            <CustomImage prefix={IMG_500_PREFIX} sublink={movie.poster_path} placeholderSrc="/img/placeholder.png" />
          </div>
          <div className="info">
            <div className="float-and-title">
              {movie.vote_count !== 0 ? (
                <div className="float">
                  <i className="fa-solid fa-star star"></i>
                  <div className="point">{formatPoint(movie.vote_average) || ""}</div>
                </div>
              ) : (
                <></>
              )}
              <div className="title">{movie.title || ""}</div>
            </div>
            <div className="date">{formatDate(movie.release_date)}</div>
            <div className="overview">{movie.overview || ""}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardMovieHorizontal;
