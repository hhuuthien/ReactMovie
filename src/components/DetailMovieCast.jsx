import React, { Component } from "react";
import { connect } from "react-redux";
import CardCast from "./CardCast";

class DetailMovieCast extends Component {
  render() {
    const { cast } = this.props;

    return (
      <div className="dm-cast">
        <h3 className="dm-cast-title">CASTS</h3>
        <div
          className="dm-cast-all"
          onClick={() => {
            this.props.dispatch({
              type: "SHOW_MODAL",
              whatToShow: "cast",
            });
          }}
        >
          SEE ALL
        </div>
        <div className="dm-cast-list">
          {cast.map((cast, index) => {
            return <CardCast cast={cast} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default connect()(DetailMovieCast);
