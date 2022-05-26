import React, { Component } from "react";
import { connect } from "react-redux";
import YouTube from "react-youtube";

class TrailerPlayer extends Component {
  render() {
    const innerWidth = window.innerWidth;
    const width = innerWidth - 80 - 20;

    let height = 500;
    if (innerWidth <= 768) {
      height = 400;
    }
    if (innerWidth <= 576) {
      height = 200;
    }

    const options = {
      width: width.toString(),
      height: height.toString(),
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        rel: 0,
      },
    };

    const { videoObject, movieID } = this.props;

    if (!videoObject.id || videoObject.id !== movieID || videoObject.results.length === 0) return <></>;

    const trailersList = videoObject.results.filter((video) => video.type === "Trailer" && video.site === "YouTube");
    return (
      <div className="trailer-player">
        <YouTube videoId={trailersList[0].key} opts={options} onReady={this.onReady} />
      </div>
    );
  }

  onReady(event) {
    // event.target.pauseVideo();
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    videoObject: rootReducer.movieReducer.movieInDetail_video,
  };
};

export default connect(mapStateToProps)(TrailerPlayer);
