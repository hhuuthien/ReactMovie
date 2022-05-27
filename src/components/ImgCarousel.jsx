import { Carousel } from "3d-react-carousal";
import React, { Component } from "react";
import { IMG_PREFIX } from "../data/configData";

export default class ImgCarousel extends Component {
  render() {
    const { movieList } = this.props;

    const slides = [];

    for (let movie of movieList) {
      if (movie.backdrop_path !== null) {
        slides.push(<img src={`${IMG_PREFIX}${movie.backdrop_path}`} />);
      }
    }

    return (
      <div className="imgcarousel-main">
        <Carousel slides={slides} autoplay={true} arrows={false} />
      </div>
    );
  }
}
