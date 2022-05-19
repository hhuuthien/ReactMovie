import React, { Component } from "react";
import { IMG_500_PREFIX } from "../data/configData";

export default class CardCastForModal extends Component {
  render() {
    const { cast } = this.props;
    return (
      <div className="card-cast2">
        <div className="card-cast2-image">
          {cast.profile_path === null || cast.profile_path === "" ? <img src={"/img/people_placeholder.png"} /> : <img src={`${IMG_500_PREFIX}${cast.profile_path}`} />}
        </div>
        <div className="card-cast2-info">
          <div className="card-cast2-name">{cast.name}</div>
          <div className="card-cast2-character">{cast.character}</div>
        </div>
      </div>
    );
  }
}
