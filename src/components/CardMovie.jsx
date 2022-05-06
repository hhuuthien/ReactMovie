import React, { Component } from "react";
import { connect } from "react-redux";
import { IMG_500_PREFIX } from "../data/configData";

class CardMovie extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div
        className="card-movie"
        onClick={() => {
          this.props.dispatch({
            type: "TOGGLE_MODAL_MOVIE_ON",
            movie,
          });
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

const mapStateToProps = (rootReducer) => {
  return {
    isShowModalMovie: rootReducer.movieReducer.isShowModalMovie,
  };
};

export default connect(mapStateToProps)(CardMovie);
