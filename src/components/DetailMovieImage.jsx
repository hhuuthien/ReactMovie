import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { API_KEY, IMG_500_PREFIX, PREFIX } from "../data/configData";

class DetailMovieImage extends Component {
  async componentDidMount() {
    const { movieID } = this.props;
    const url = `${PREFIX}/movie/${movieID}/images?api_key=${API_KEY}&language=en`;
    try {
      const { data } = await axios.get(url);

      this.props.dispatch({
        type: "LOAD_IMAGES",
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { images } = this.props;

    if (!images.posters) return <></>;

    return (
      <div className="dm-image">
        <h3 className="dm-image-title">
          IMAGES<span>POSTERS</span>
        </h3>
        {!images.posters || images.posters.length === 0 ? (
          <div>This movie has no posters</div>
        ) : (
          <div className="dm-image-list">
            {images.posters.map((img, index) => (
              <div
                className="dm-image-container"
                key={index}
                onClick={() => {
                  this.props.history.push("/image/1/" + index);
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

export default connect(mapStateToProps)(DetailMovieImage);
