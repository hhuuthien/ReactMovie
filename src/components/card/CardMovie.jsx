import React, { Component } from "react";
import { IMG_500_PREFIX } from "../../data/configData";
import CustomImage from "../CustomImage";

class CardMovie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div
        className="cardmovie-main"
        onClick={() => {
          this.props.history.push("/movie/" + movie.id);
        }}
      >
        <div className="content">
          <div className="poster">
            <CustomImage prefix={IMG_500_PREFIX} sublink={movie.poster_path} placeholderSrc="/img/placeholder.png" />
          </div>
          <div className="title">{movie.title || ""}</div>
          {movie.vote_count !== 0 ? (
            <div className="float">
              <i className="fa-solid fa-star star"></i>
              <div className="point">{movie.vote_average || ""}</div>
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
