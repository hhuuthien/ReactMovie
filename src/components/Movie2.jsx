import React, { Component } from "react";
import axios from "axios";
import { API_KEY, LANGUAGE, PREFIX } from "../config.js";
import { connect } from "react-redux";
import CardMovie from "./CardMovie.jsx";
import ModalMovie from "./ModalMovie.jsx";

class Movie2 extends Component {
  async componentDidMount() {
    const url = `${PREFIX}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=1`;
    try {
      const { data } = await axios.get(url);

      this.props.dispatch({
        type: "LOAD_MOVIE_NOW_PLAYING",
        data: data.results,
      });

      console.log(data.results);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  renderMovieNowPlaying() {
    return this.props.movieNowPlaying.map((movie, index) => {
      return <CardMovie movie={movie} key={index} />;
    });
  }

  render() {
    return (
      <div className="ui container">
        <h2 className="ui header" style={{ marginTop: 20 }}>
          Now Playing
        </h2>
        <div className="movie-list">{this.renderMovieNowPlaying()}</div>

        {this.props.isShowModalMovie ? <ModalMovie /> : null}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    movieNowPlaying: rootReducer.movieReducer.movieNowPlaying,
    isShowModalMovie: rootReducer.movieReducer.isShowModalMovie,
  };
};

export default connect(mapStateToProps)(Movie2);
