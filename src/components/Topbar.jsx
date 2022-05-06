import React, { Component } from "react";
import { connect } from "react-redux";

class Topbar extends Component {
  render() {
    return (
      <div
        className="topbar"
        onClick={() => {
          this.props.dispatch({
            type: "TOGGLE_SHOW_NAVBAR",
          });
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Topbar);
