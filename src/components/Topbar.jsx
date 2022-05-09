import React, { Component } from "react";
import { connect } from "react-redux";

class Topbar extends Component {
  render() {
    // ẩn navbar lúc đầu nếu màn hình nhỏ hoặc thiết bị di động
    if (window.innerWidth <= 768) {
      this.props.dispatch({
        type: "TOGGLE_SHOW_NAVBAR",
      });
    }

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

export default connect()(Topbar);
