import { Carousel } from "3d-react-carousal";
import React, { Component } from "react";
import { IMG_PREFIX } from "../data/configData";
import CustomImage from "./CustomImage";

export default class ImgCarousel extends Component {
  render() {
    const { movieList } = this.props;

    const slides = [];

    for (let movie of movieList) {
      slides.push(<CustomImage prefix={IMG_PREFIX} sublink={movie.backdrop_path} placeholderSrc="./img/placeholder.png" />);
    }

    return (
      <div className="imgcarousel-main">
        <Carousel slides={slides} autoplay={true} arrows={false} interval={10000} />
      </div>
    );
  }
}
