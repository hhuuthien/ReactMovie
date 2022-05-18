import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { API_KEY, LANGUAGE, PREFIX, REGION } from "../data/configData";
import { modifyDataFromAPI } from "../function/modifyDataFromAPI";
import CardMovie from "./CardMovie.jsx";

class Movie2 extends Component {
  async componentDidMount() {
    const url = `${PREFIX}/movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=1`;
    try {
      const { data } = await axios.get(url);

      const modifiedData = modifyDataFromAPI(data.results, 2);

      this.props.dispatch({
        type: "LOAD_MOVIE_UP_COMING",
        data: modifiedData,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  }

  renderMovieUpComing() {
    return this.props.movieUpComing.map((movie, index) => {
      return <CardMovie movie={movie} key={index} history={this.props.history} />;
    });
  }

  render() {
    return (
      <div className="movie-list-container">
        <h3 className="ui header movie-list-title">
          MOVIE <span>COMING SOON</span>
        </h3>
        <div className="movie-list">{this.renderMovieUpComing()}</div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    movieUpComing: rootReducer.movieReducer.movieUpComing,
  };
};

export default connect(mapStateToProps)(Movie2);
