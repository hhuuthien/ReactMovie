import React, { Component } from "react";
import { Button, Header } from "semantic-ui-react";
import { IMG_500_PREFIX } from "../data/configData";
import CustomImage from "./CustomImage";

export default class DetailMovieImage extends Component {
  render() {
    const { movieImage } = this.props;

    if (!movieImage.id) return <div></div>;

    console.log(movieImage);
    return (
      <div className="dmimage-main">
        <div className="title">
          <Header as="h3">IMAGES</Header>
          <Button color="blue" content="See all images" />
        </div>
        <div className="dmimage-main-list">
          {movieImage.posters.map((p, i) => {
            return (
              <div key={i} className="img-container">
                <CustomImage prefix={IMG_500_PREFIX} sublink={p.file_path} placeholderSrc="/img/placeholder.png" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
