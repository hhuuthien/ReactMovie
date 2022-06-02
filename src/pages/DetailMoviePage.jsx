import axios from "axios";
import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";
import { connect } from "react-redux";
import { Button, Icon, Label, Modal, Popup } from "semantic-ui-react";
import CustomImage from "../components/CustomImage";
import DetailMovieCast from "../components/DetailMovieCast";
import DetailMovieCrew from "../components/DetailMovieCrew";
import DetailMovieInfo from "../components/DetailMovieInfo";
import DetailMovieImage from "../components/DetailMovieImage";
import { API_KEY, IMG_PREFIX, LANGUAGE, PREFIX } from "../data/configData";
import { formatDate } from "../function/formatDate";
import { formatRuntime } from "../function/formatRuntime";

class DetailMoviePage extends Component {
  state = {
    isShowModal: false,
  };

  getTrailerLink(videos) {
    let trailers = videos.filter((video) => video.site === "YouTube" && video.type === "Trailer");
    if (trailers.length !== 0) {
      return "https://www.youtube.com/watch?v=" + trailers[0].key;
    } else {
      return "";
    }
  }

  render() {
    const { movie, image } = this.props;

    if (!movie.id) return <div></div>;

    const size = window.innerWidth >= 768 ? "large" : "medium";
    const buttonSize = window.innerWidth >= 768 ? "medium" : "small";

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

              <div className="star">
                <Icon name="star" />
                {movie.vote_average || "No information"}
                {movie.vote_count ? `(${movie.vote_count} votes)` : ""}
              </div>
              <div className="date_runtime">
                <Popup
                  trigger={
                    <Label size={size} color={"blue"}>
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
                    <Label size={size} color={"blue"}>
                      <Icon name="time" />
                      {formatRuntime(movie.runtime)}
                    </Label>
                  }
                  content="Runtime"
                  position="top center"
                  inverted
                />
              </div>
              <div className="genres">
                {movie.genres.map((g, i) => {
                  return (
                    <Label size={size} color={"blue"} key={i}>
                      {g.name}
                    </Label>
                  );
                })}
              </div>
              <div className="user-action">
                <Modal
                  dimmer={"blurring"}
                  basic
                  onClose={() =>
                    this.setState({
                      isShowModal: false,
                    })
                  }
                  onOpen={() =>
                    this.setState({
                      isShowModal: true,
                    })
                  }
                  open={this.state.isShowModal}
                  size="small"
                  trigger={
                    <Button size={buttonSize} color="red">
                      <i className="fa-solid fa-circle-play"></i>
                      Watch trailer
                    </Button>
                  }
                >
                  <div className="player-wrapper">
                    <ReactPlayer className="react-player" url={this.getTrailerLink(movie.videos.results)} playing={true} controls={true} width="100%" height="100%" />
                  </div>
                </Modal>
              </div>
              <div className="tagline">{movie.tagline || ""}</div>
              <div className="overview">{movie.overview || ""}</div>
            </div>
          </div>
          <div className="section2">
            <DetailMovieCast cast={movie.credits.cast} title={movie.title} />
            <div style={{ height: 40 }}></div>
            <DetailMovieCrew crew={movie.credits.crew} title={movie.title} />
            <div style={{ height: 40 }}></div>
            <DetailMovieInfo movie={movie} />
            <div style={{ height: 40 }}></div>
            <DetailMovieImage movieImage={image} />
            <div style={{ height: 40 }}></div>
          </div>
        </div>
      </div>
    );
  }

  callAPI = async (movieID) => {
    try {
      const url1 = `${PREFIX}/movie/${movieID}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=videos,credits`;
      const one = axios.get(url1);
      const url2 = `${PREFIX}/movie/${movieID}/images?api_key=${API_KEY}&include_image_language=en`;
      const two = axios.get(url2);

      await axios
        .all([one, two])
        .then(
          axios.spread((...responses) => {
            this.props.dispatch({
              type: "LOAD_MOVIE_DETAIL",
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
    const { movieID } = this.props.match.params;
    this.callAPI(movieID);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_DATA_BEFORE_UNMOUNTING",
    });
  }
}

const mapStateToProps = (root) => {
  return {
    movie: root.movieReducer.movieInDetail,
    image: root.movieReducer.movieImage,
  };
};

export default connect(mapStateToProps)(DetailMoviePage);
