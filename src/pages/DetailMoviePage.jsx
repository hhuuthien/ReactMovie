import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Label, Modal, Popup } from "semantic-ui-react";
import CustomImage from "../components/CustomImage";
import { API_KEY, IMG_PREFIX, LANGUAGE, PREFIX } from "../data/configData";
import { formatDate } from "../function/formatDate";
import { formatRuntime } from "../function/formatRuntime";
import ReactPlayer from "react-player/youtube";

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

  renderWebsiteButton(homepage) {
    if (!homepage || homepage === null || homepage === "") {
      return (
        <Button icon disabled>
          <Icon name="world" />
        </Button>
      );
    }

    return (
      <Button icon onClick={() => this.goToWebsite(homepage)}>
        <Icon name="world" />
      </Button>
    );
  }

  renderIMDBButton(id) {
    if (!id || id === null || id === "") {
      return <Button disabled>See it on IMDB</Button>;
    }
    return <Button onClick={() => this.goToIMDB(id)}>See it on IMDB</Button>;
  }

  goToWebsite(homepage) {
    window.open(homepage);
  }

  goToIMDB(id) {
    window.open("https://www.imdb.com/title/" + id);
  }

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

              <div className="star">
                <Icon name="star" />
                {movie.vote_average || "No information"} {`(${movie.vote_count} votes)` || ""}
              </div>
              <div className="date_runtime">
                <Popup
                  trigger={
                    <Label size={"large"} color={"blue"}>
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
                    <Label size={"large"} color={"blue"}>
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
                    <Label size={"large"} color={"blue"} key={i}>
                      {g.name}
                    </Label>
                  );
                })}
              </div>
              <div className="user-action">
                {this.renderWebsiteButton(movie.homepage)}
                {this.renderIMDBButton(movie.imdb_id)}

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
                  trigger={<Button color="red">Watch trailer</Button>}
                >
                  <Modal.Content>
                    <ReactPlayer url={this.getTrailerLink(movie.videos.results)} playing={true} controls={true} />
                  </Modal.Content>
                </Modal>
              </div>
              <div className="tagline">{movie.tagline || ""}</div>
              <div className="overview">{movie.overview || ""}</div>
            </div>
          </div>
          <div className="section2"></div>
        </div>
      </div>
    );
  }

  //homepage, trailer, imdb

  callAPI = async (movieID) => {
    try {
      const url = `${PREFIX}/movie/${movieID}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=videos`;
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
