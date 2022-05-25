import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { connect } from "react-redux";
import { IMG_500_PREFIX, IMG_PREFIX } from "../data/configData";
// import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class MovieImageGallery extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "HIDE_NAVBAR",
    });
  }

  render() {
    const { posters } = this.props.movie.images;

    let images = [];
    for (let poster of posters) {
      images.push({
        original: `${IMG_PREFIX}${poster.file_path}`,
        thumbnail: `${IMG_500_PREFIX}${poster.file_path}`,
      });
    }

    return (
      <div className="mig-page">
        <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showIndex={true} />
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    movie: rootReducer.movieReducer.movieInDetail,
  };
};

export default connect(mapStateToProps)(MovieImageGallery);
