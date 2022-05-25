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
    const { posters } = this.props.images;

    let images = [];
    for (let poster of posters) {
      images.push({
        original: `${IMG_PREFIX}${poster.file_path}`,
        thumbnail: `${IMG_500_PREFIX}${poster.file_path}`,
      });
    }

    return (
      <div className="mig-page">
        <ImageGallery items={images} lazyLoad={true} showFullscreenButton={false} showPlayButton={false} ref={(i) => (this._imageGallery = i)} />
        <NavbarOverlay />
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    images: rootReducer.movieReducer.movieInDetail_image,
  };
};

export default connect(mapStateToProps)(MovieImageGallery);
