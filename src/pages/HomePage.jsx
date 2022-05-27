import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import MovieBar from "../components/MovieBar";
import ImageCarousel from "../components/ImgCarousel";
import { API_KEY, LANGUAGE, PREFIX, REGION } from "../data/configData";

class HomePage extends Component {
  render() {
    const { movieNowPlaying, moviePopular } = this.props;

    return (
      <div className="homepage-main">
        <ImageCarousel movieList={moviePopular} />
        <MovieBar movieList={movieNowPlaying} title="MOVIES NOW PLAYING" />
        <MovieBar movieList={moviePopular} title="POPULAR MOVIES" />
      </div>
    );
  }

  callAPI = async () => {
    try {
      const one = axios.get(`${PREFIX}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=1`);
      const two = axios.get(`${PREFIX}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=1`);

      await axios
        .all([one, two])
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
    moviePopular: rootReducer.movieReducer.moviePopular,
  };
};

export default connect(mapStateToProps)(HomePage);
