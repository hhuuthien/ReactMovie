import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import DetailMovieCast from "../components/DetailMovieCast";
import DetailMovieCrew from "../components/DetailMovieCrew";
import DetailMovieImage from "../components/DetailMovieImage";
import DetailMovieImage2 from "../components/DetailMovieImage2";
import ModalCredit from "../components/ModalCredit";
import NavbarOverlay from "../components/NavbarOverlay";
import { API_KEY, IMG_PREFIX, LANGUAGE, PREFIX } from "../data/configData";
import { findGenreByID } from "../function/findGenreByID";
import { formatDate } from "../function/formatDate";
import { formatRuntime } from "../function/formatRuntime";

class DetailMoviePage extends Component {
  async componentDidMount() {
    this.props.dispatch({
      type: "HIDE_NAVBAR",
    });

    const { movieID } = this.props.match.params;
    const url = `${PREFIX}/movie/${movieID}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=credits`;
    try {
      const { data } = await axios.get(url);

      this.props.dispatch({
        type: "LOAD_DETAIL_MOVIE",
        data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  }

  render() {
    const { movie } = this.props;

    if (Number(this.props.match.params.movieID) !== movie.id) {
      return <></>;
    }

    return (
      <>
        <div className="detail-movie-page">
          <div className="dm-backdrop">
            <div className="dm-blank"></div>
            <img src={`${IMG_PREFIX}${movie.backdrop_path}`} alt={movie.title} />
            <div className="dm-backdrop-overlay"></div>
            <div className="dm-content">
              <div className="dm-poster">
                <img src={`${IMG_PREFIX}${movie.poster_path}`} alt={movie.title} />
              </div>
              <div className="dm-info">
                <h1 className="dm-title">{movie.title}</h1>
                <div className="dm-tagline">{movie.tagline}</div>
                <div style={{ marginBottom: 14 }} className="dm-release">
                  Release date: {formatDate(movie.release_date)} - Runtime: {formatRuntime(movie.runtime)}
                </div>
                <div className="dm-genre" style={{ marginBottom: 14 }}>
                  {movie.genres.map((genre, index) => {
                    return (
                      <div className="ui label" key={index}>
                        {findGenreByID(genre.id)}
                      </div>
                    );
                  })}
                </div>
                <div className="dm-overview">{movie.overview}</div>
              </div>
            </div>
          </div>
        </div>
        <DetailMovieCast cast={movie.credits.cast} />
        <DetailMovieCrew crew={movie.credits.crew} />
        <DetailMovieImage movieID={movie.id} history={this.props.history} />
        <DetailMovieImage2 history={this.props.history} />
        <NavbarOverlay />
        <ModalCredit cast={movie.credits.cast} crew={movie.credits.crew} title={movie.title} />
      </>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    movie: rootReducer.movieReducer.movieInDetail,
  };
};

export default connect(mapStateToProps)(DetailMoviePage);
