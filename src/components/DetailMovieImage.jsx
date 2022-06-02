import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import { IMG_500_PREFIX, IMG_PREFIX } from "../data/configData";
import CustomImage from "./CustomImage";

export default class DetailMovieImage extends Component {
  state = {
    isModal: false,
    img: "",
  };

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
              <div
                key={i}
                className="img-container"
                onClick={() => {
                  this.setState({ isModal: true, img: p.file_path });
                }}
              >
                <CustomImage prefix={IMG_500_PREFIX} sublink={p.file_path} placeholderSrc="/img/placeholder.png" />
              </div>
            );
          })}
        </div>
        <Modal
          className="dmimage-main-modal"
          dimmer={"blurring"}
          basic
          onClose={() => this.setState({ isModal: false })}
          onOpen={() => this.setState({ isModal: true })}
          open={this.state.isModal}
        >
          <Modal.Content>
            <i className="fa-solid fa-caret-left prev"></i>
            <CustomImage prefix={IMG_PREFIX} sublink={this.state.img} placeholderSrc="/img/placeholder.png" />
            <i className="fa-solid fa-caret-right next"></i>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
