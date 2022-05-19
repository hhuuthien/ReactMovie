import React, { Component } from "react";
import { IMG_500_PREFIX } from "../data/configData";

export default class CardCrew extends Component {
  render() {
    const { crew } = this.props;
    return (
      <div className="card-crew">
        <div className="card-crew-image">
          {crew.profile_path === null || crew.profile_path === "" ? <img src={"/img/people_placeholder.png"} /> : <img src={`${IMG_500_PREFIX}${crew.profile_path}`} />}
        </div>
        <div className="card-crew-info">
          <div className="card-crew-name">{crew.name}</div>
          <div className="card-crew-job">{crew.job}</div>
        </div>
      </div>
    );
  }
}
