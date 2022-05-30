import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import CardMovieHorizontal from "../components/card/CardMovieHorizontal";
import CustomPagination from "../components/CustomPagination";
import { API_KEY, LANGUAGE, PREFIX, REGION } from "../data/configData";

class MovieListPage extends Component {
  state = {
    isShowPage1: true,
  };

  callAPI = async (page) => {
    this.setState({
      isShowPage1: false,
    });

    try {
      let url = "";
      const { listType } = this.props.match.params;
      if (listType === "l1") {
        url = `${PREFIX}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=${page}`;
      } else if (listType === "l2") {
        url = `${PREFIX}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=${page}`;
      } else if (listType === "l3") {
        url = `${PREFIX}/movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=${page}`;
      } else if (listType === "l4") {
        url = `${PREFIX}/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=${page}`;
      }

      const response = await axios.get(url);

      this.props.dispatch({
        type: "LOAD_MOVIE_OTHER_PAGES",
        data: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { movieNowPlaying, moviePopular, movieUpComing, movieTopRated, numPages1, numPages2, numPages3, numPages4, movieLoadMorePages } = this.props;
    const { listType } = this.props.match.params;

    if (movieNowPlaying.length === 0) return <Redirect to="/" />;

    let movieList = [];
    let title = "";
    let numPages = 0;
    if (listType === "l1") {
      movieList = movieNowPlaying;
      title = "MOVIES NOW PLAYING";
      numPages = numPages1;
    } else if (listType === "l2") {
      movieList = moviePopular;
      title = "POPULAR MOVIE";
      numPages = numPages2;
    } else if (listType === "l3") {
      movieList = movieUpComing;
      title = "COMING SOON";
      numPages = numPages3;
    } else if (listType === "l4") {
      movieList = movieTopRated;
      title = "TOP RATED MOVIES";
      numPages = numPages4;
    }

    return (
      <div className="movielistpage-main" id="movielistpage-main">
        <div className="container">
          <div className="movie-title">
            <h3>{title}</h3>
            <div className="div1">
              <CustomPagination numPages={numPages} callAPI={this.callAPI} />
            </div>
          </div>
          <div className="movie-list">
            {this.state.isShowPage1
              ? movieList.map((movie, index) => <CardMovieHorizontal movie={movie} key={index} history={this.props.history} />)
              : movieLoadMorePages.map((movie, index) => <CardMovieHorizontal movie={movie} key={index} history={this.props.history} />)}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.getElementById("movielistpage-main")?.scrollIntoView({
      behavior: "smooth",
    });
  }
}

const mapStateToProps = (root) => {
  return {
    movieNowPlaying: root.movieReducer.movieNowPlaying,
    moviePopular: root.movieReducer.moviePopular,
    numPages1: root.movieReducer.movieNowPlaying_totalPages,
    numPages2: root.movieReducer.moviePopular_totalPages,
    movieUpComing: root.movieReducer.movieUpComing,
    movieTopRated: root.movieReducer.movieTopRated,
    numPages3: root.movieReducer.movieUpComing_totalPages,
    numPages4: root.movieReducer.movieTopRated_totalPages,
    movieLoadMorePages: root.movieReducer.movieLoadMorePages,
  };
};

export default connect(mapStateToProps)(MovieListPage);
