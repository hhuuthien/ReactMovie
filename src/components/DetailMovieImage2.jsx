import React, { Component } from "react";
import { connect } from "react-redux";
import { IMG_500_PREFIX } from "../data/configData";

class DetailMovieImage2 extends Component {
  render() {
    const { images } = this.props;

    if (!images.backdrops) return <></>;

    return (
      <div className="dm-image">
        <h3 className="dm-image-title">
          IMAGES<span>BACKDROPS</span>
        </h3>
        {!images.backdrops || images.backdrops.length === 0 ? (
          <div>This movie has no backdrops</div>
        ) : (
          <div className="dm-image-list2">
            {images.backdrops.map((img, index) => (
              <div
                className="dm-image-container"
                key={index}
                onClick={() => {
                  this.props.history.push("/image/2/" + index);
                }}
              >
                <img src={`${IMG_500_PREFIX}${img.file_path}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    images: rootReducer.movieReducer.movieInDetail_image,
  };
};

export default connect(mapStateToProps)(DetailMovieImage2);
