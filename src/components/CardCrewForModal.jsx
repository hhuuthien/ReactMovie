import React, { Component } from "react";
import { IMG_500_PREFIX } from "../data/configData";

export default class CardCrewForModal extends Component {
  render() {
    const { crew } = this.props;
    return (
      <div className="card-crew2">
        <div className="card-crew2-image">
          {crew.profile_path === null || crew.profile_path === "" ? <img src={"/img/people_placeholder.png"} /> : <img src={`${IMG_500_PREFIX}${crew.profile_path}`} />}
        </div>
        <div className="card-crew2-info">
          <div className="card-crew2-name">{crew.name}</div>
          <div className="card-crew2-job">{crew.job}</div>
        </div>
      </div>
    );
  }
}
