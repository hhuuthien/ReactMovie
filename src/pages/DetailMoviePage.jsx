import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Label, Popup, Rating } from "semantic-ui-react";
import CustomImage from "../components/CustomImage";
import { API_KEY, IMG_PREFIX, LANGUAGE, PREFIX } from "../data/configData";
import { formatDate } from "../function/formatDate";
import { formatRuntime } from "../function/formatRuntime";

class DetailMoviePage extends Component {
  render() {
    const { movie } = this.props;
    console.log(movie);

    if (!movie.id) return <></>;

    return (
      <div className="dmp-main">
        <div className="backdrop">
          <CustomImage prefix={IMG_PREFIX} sublink={movie.backdrop_path} placeholderSrc={"/img/placeholder.png"} />
        </div>
        <div className="overlay"></div>
        <div className="container">
          <div className="section1">
            <div className="poster">
              <CustomImage prefix={IMG_PREFIX} sublink={movie.poster_path} placeholderSrc={"/img/placeholder.png"} />
            </div>
            <div className="info">
              <div className="title">{movie.title || ""}</div>
              {/* <div className="tagline">{movie.tagline || ""}</div> */}
              <div className="star">
                <Icon name="star" />
                {movie.vote_average || "No information"} {`(${movie.vote_count} votes)` || ""}
              </div>
              <div className="date_runtime_genres">
                <Popup
                  trigger={
                    <Label size={"large"}>
                      <Icon name="calendar" />
                      {formatDate(movie.release_date)}
                    </Label>
                  }
                  content="Release date"
                  position="top center"
                  inverted
                />
                <Popup
                  trigger={
                    <Label size={"large"}>
                      <Icon name="time" />
                      {formatRuntime(movie.runtime)}
                    </Label>
                  }
                  content="Runtime"
                  position="top center"
                  inverted
                />
                {movie.genres.map((g, i) => {
                  return <Label size={"large"}>{g.name}</Label>;
                })}
              </div>
            </div>
          </div>
          <div className="section2"></div>
        </div>
      </div>
    );
  }

  callAPI = async (movieID) => {
    try {
      const url = `${PREFIX}/movie/${movieID}?api_key=${API_KEY}&language=${LANGUAGE}`;
      const response = await axios.get(url);

      this.props.dispatch({
        type: "LOAD_MOVIE_DETAIL",
        data: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    const { movieID } = this.props.match.params;
    this.callAPI(movieID);
  }
}

const mapStateToProps = (root) => {
  return {
    movie: root.movieReducer.movieInDetail,
  };
};

export default connect(mapStateToProps)(DetailMoviePage);
