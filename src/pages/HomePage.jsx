import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import MovieBar from "../components/MovieBar";
import { API_KEY, LANGUAGE, PREFIX, REGION } from "../data/configData";

class HomePage extends Component {
  render() {
    const { movieNowPlaying, moviePopular, movieUpComing, movieTopRated, numPages1, numPages2, numPages3, numPages4 } = this.props;

    return (
      <div className="homepage-main">
        <div className="container">
          {/* <ImageCarousel movieList={moviePopular} /> */}
          <MovieBar movieList={movieNowPlaying} title="MOVIES NOW PLAYING" numPages={numPages1} history={this.props.history} />
          <MovieBar movieList={moviePopular} title="POPULAR MOVIES" numPages={numPages2} history={this.props.history} />
          <MovieBar movieList={movieUpComing} title="COMING SOON" numPages={numPages3} history={this.props.history} />
          <MovieBar movieList={movieTopRated} title="TOP RATED MOVIES" numPages={numPages4} history={this.props.history} />
        </div>
      </div>
    );
  }

  callAPI = async () => {
    try {
      const one = axios.get(`${PREFIX}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=1`);
      const two = axios.get(`${PREFIX}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=1`);
      const three = axios.get(`${PREFIX}/movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=1`);
      const four = axios.get(`${PREFIX}/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=1`);

      await axios
        .all([one, two, three, four])
        .then(
          axios.spread((...responses) => {
            this.props.dispatch({
              type: "LOAD_MOVIE",
              response: responses,
            });
          })
        )
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.callAPI();
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    movieNowPlaying: rootReducer.movieReducer.movieNowPlaying,
    numPages1: rootReducer.movieReducer.movieNowPlaying_totalPages,
    moviePopular: rootReducer.movieReducer.moviePopular,
    numPages2: rootReducer.movieReducer.moviePopular_totalPages,
    movieUpComing: rootReducer.movieReducer.movieUpComing,
    numPages3: rootReducer.movieReducer.movieUpComing_totalPages,
    movieTopRated: rootReducer.movieReducer.movieTopRated,
    numPages4: rootReducer.movieReducer.movieTopRated_totalPages,
  };
};

export default connect(mapStateToProps)(HomePage);
