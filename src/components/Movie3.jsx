import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { API_KEY, LANGUAGE, PREFIX, REGION } from "../data/configData";
import CardMovie from "./CardMovie.jsx";

class Movie3 extends Component {
  async componentDidMount() {
    const url = `${PREFIX}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=1`;
    try {
      const { data } = await axios.get(url);

      this.props.dispatch({
        type: "LOAD_MOVIE_POPULAR",
        data: data.results,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  }

  renderMoviePopular() {
    return this.props.moviePopular.map((movie, index) => {
      return <CardMovie movie={movie} key={index} history={this.props.history} />;
    });
  }

  render() {
    return (
      <div className="movie-list-container">
        <h3 className="ui header movie-list-title">
          MOVIE <span>POPULAR & TRENDING</span>
        </h3>
        <div className="movie-list">{this.renderMoviePopular()}</div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    moviePopular: rootReducer.movieReducer.moviePopular,
  };
};

export default connect(mapStateToProps)(Movie3);
