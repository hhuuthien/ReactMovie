import React, { Component } from "react";
import { IMG_500_PREFIX } from "../data/configData";

export default class CardCast extends Component {
  render() {
    const { cast } = this.props;
    return (
      <div
        className="card-cast"
        onClick={() => {
          this.props.history.push("/people/" + cast.id);
        }}
      >
        <div className="card-cast-image">
          {cast.profile_path === null || cast.profile_path === "" ? <img src={"/img/people_placeholder.png"} /> : <img src={`${IMG_500_PREFIX}${cast.profile_path}`} />}
        </div>
        <div className="card-cast-name">{cast.name}</div>
        <div className="card-cast-character">{cast.character}</div>
      </div>
    );
  }
}
