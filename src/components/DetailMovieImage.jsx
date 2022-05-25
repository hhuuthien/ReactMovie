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
        type: "LOAD_IMAGES_AND_ADD_TO_MOVIE",
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movie } = this.props;

    if (!movie.images) return <></>;

    return (
      <div className="dm-image">
        <h3 className="dm-image-title">IMAGES</h3>
        <div className="dm-image-list">
          {movie.images.posters.map((img, index) => (
            <div
              className="dm-image-container"
              key={index}
              onClick={() => {
                this.props.history.push("/image");
              }}
            >
              <img src={`${IMG_500_PREFIX}${img.file_path}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    movie: rootReducer.movieReducer.movieInDetail,
  };
};

export default connect(mapStateToProps)(DetailMovieImage);
