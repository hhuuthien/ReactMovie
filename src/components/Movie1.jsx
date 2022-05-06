import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { API_KEY, LANGUAGE, PREFIX, REGION } from "../data/configData";
import CardMovie from "./CardMovie.jsx";
import { modifyDataFromAPI } from "../function/modifyDataFromAPI";

class Movie1 extends Component {
  async componentDidMount() {
    const url = `${PREFIX}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=1`;
    try {
      const { data } = await axios.get(url);

      const modifiedData = modifyDataFromAPI(data.results, 1);

      this.props.dispatch({
        type: "LOAD_MOVIE_NOW_PLAYING",
        data: modifiedData,
      });
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
        <h3 className="ui header" style={{ marginTop: 20 }}>
          Now playing
        </h3>
        <div className="movie-list">{this.renderMovieNowPlaying()}</div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    movieNowPlaying: rootReducer.movieReducer.movieNowPlaying,
  };
};

export default connect(mapStateToProps)(Movie1);
