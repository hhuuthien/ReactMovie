import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { connect } from "react-redux";
import { IMG_500_PREFIX, IMG_PREFIX } from "../data/configData";
import NavbarOverlay from "../components/NavbarOverlay";

class MovieImageGallery extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "HIDE_NAVBAR",
    });

    const { imageIndex } = this.props.match.params;
    this._imageGallery.slideToIndex(Number(imageIndex));
  }

  render() {
    const { type } = this.props.match.params;

    if (type === "1") {
      const { posters } = this.props.images;
      let imagesPosters = [];
      for (let poster of posters) {
        imagesPosters.push({
          original: `${IMG_PREFIX}${poster.file_path}`,
          thumbnail: `${IMG_500_PREFIX}${poster.file_path}`,
        });
      }

      return (
        <div className="mig-page">
          <ImageGallery items={imagesPosters} lazyLoad={true} showFullscreenButton={false} showPlayButton={false} ref={(i) => (this._imageGallery = i)} />
          <NavbarOverlay />
        </div>
      );
    } else if (type === "2") {
      const { backdrops } = this.props.images;
      let imagesBackdrops = [];
      for (let backdrop of backdrops) {
        imagesBackdrops.push({
          original: `${IMG_PREFIX}${backdrop.file_path}`,
          thumbnail: `${IMG_500_PREFIX}${backdrop.file_path}`,
        });
      }

      return (
        <div className="mig-page">
          <ImageGallery items={imagesBackdrops} lazyLoad={true} showFullscreenButton={false} showPlayButton={false} ref={(i) => (this._imageGallery = i)} />
          <NavbarOverlay />
        </div>
      );
    }
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    images: rootReducer.movieReducer.movieInDetail_image,
  };
};

export default connect(mapStateToProps)(MovieImageGallery);
