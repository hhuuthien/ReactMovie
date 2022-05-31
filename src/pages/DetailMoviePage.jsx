import axios from "axios";
import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";
import { connect } from "react-redux";
import { Button, Icon, Label, Modal, Popup } from "semantic-ui-react";
import CustomImage from "../components/CustomImage";
import DetailMovieCast from "../components/DetailMovieCast";
import DetailMovieCrew from "../components/DetailMovieCrew";
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

  renderWebsiteButton(homepage, size) {
    if (!homepage || homepage === null || homepage === "") {
      return (
        <Button size={size} icon disabled>
          <Icon name="world" />
        </Button>
      );
    }

    return (
      <Button icon size={size} onClick={() => this.goToWebsite(homepage)}>
        <Icon name="world" />
      </Button>
    );
  }

  renderIMDBButton(id, size) {
    if (!id || id === null || id === "") {
      return (
        <Button size={size} disabled>
          IMDB
        </Button>
      );
    }
    return (
      <Button size={size} onClick={() => this.goToIMDB(id)}>
        IMDB
      </Button>
    );
  }

  goToWebsite(homepage) {
    window.open(homepage);
  }

  goToIMDB(id) {
    window.open("https://www.imdb.com/title/" + id);
  }

  render() {
    const { movie } = this.props;

    if (!movie.id) return <></>;

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
                {this.renderWebsiteButton(movie.homepage, buttonSize)}
                {this.renderIMDBButton(movie.imdb_id, buttonSize)}

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
            <DetailMovieCast cast={movie.credits.cast} />
            <div style={{ height: 40 }}></div>
            <DetailMovieCrew crew={movie.credits.crew} />
          </div>
        </div>
      </div>
    );
  }

  callAPI = async (movieID) => {
    try {
      const url = `${PREFIX}/movie/${movieID}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=videos,credits`;
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
