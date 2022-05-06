import React, { Component } from "react";
import { connect } from "react-redux";
import { IMG_PREFIX } from "../data/configData";
import { findGenreByID } from "../function/findGenreByID";

class ModalMovie extends Component {
  toggleModalMovieOff() {
    this.props.dispatch({
      type: "TOGGLE_MODAL_MOVIE_OFF",
    });
  }

  render() {
    const { movie } = this.props;

    if (this.props.isShow) {
      return (
        <div className="modal-movie">
          <div className="overlay">
            <div className="modal">
              <img src={`${IMG_PREFIX}${movie.backdrop_path}`} />
              <div className="image_overlay"></div>
              <div className="title">{movie.title}</div>
              <div className="genre">
                {movie.genre_ids.map((id, index) => {
                  return (
                    <div className="ui label" key={index}>
                      {findGenreByID(id)}
                    </div>
                  );
                })}
              </div>
              <div className="description">{movie.overview}</div>
              <div className="action">
                <button className="ui primary button">See more</button>
              </div>
              <i className="fa-solid fa-circle-xmark close" onClick={() => this.toggleModalMovieOff()}></i>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    isShow: rootReducer.movieReducer.isShowModalMovie,
    movie: rootReducer.movieReducer.movieInModalMovie,
  };
};

export default connect(mapStateToProps)(ModalMovie);
