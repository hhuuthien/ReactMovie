import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { API_KEY, LANGUAGE, PREFIX } from "../data/configData";
import CardMovie from "./CardMovie.jsx";

class RelatedMovie extends Component {
  async componentDidMount() {
    const { movieID } = this.props;
    const url = `${PREFIX}/movie/${movieID}/recommendations?api_key=${API_KEY}&language=${LANGUAGE}&page=1`;

    try {
      const { data } = await axios.get(url);

      this.props.dispatch({
        type: "LOAD_RECOMMENDATIONS",
        data: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { relatedMovies } = this.props;

    if (!relatedMovies || relatedMovies.length === 0) return <></>;
    return (
      <div className="related-movie">
        <h3 className="rm-title">recommendations for you</h3>
        <div className="rm-list">
          {relatedMovies.map((movie, index) => {
            return <CardMovie movie={movie} key={index} history={this.props.history} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    relatedMovies: rootReducer.movieReducer.movieInDetail_related,
  };
};

export default connect(mapStateToProps)(RelatedMovie);
