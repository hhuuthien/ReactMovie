import React, { Component } from "react";
import { IMG_500_PREFIX } from "../data/configData";

export default class CardCast extends Component {
  render() {
    const { cast } = this.props;
    return (
      <div className="card-cast">
        <div className="card-cast-image">
          <img src={`${IMG_500_PREFIX}${cast.profile_path}`} />
        </div>
        <div className="card-cast-name">{cast.name}</div>
      </div>
    );
  }
}
