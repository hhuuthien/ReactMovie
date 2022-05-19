import React, { Component } from "react";
import CardCast from "./CardCast";

export default class DetailMovieCast extends Component {
  render() {
    const { cast } = this.props;

    return (
      <div className="dm-cast">
        <h2 className="dm-cast-title">Casts</h2>
        <div className="dm-cast-list">
          {cast.map((cast, index) => {
            return <CardCast cast={cast} key={index} />;
          })}
        </div>
      </div>
    );
  }
}
