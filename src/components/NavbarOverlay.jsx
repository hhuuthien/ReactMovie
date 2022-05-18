import React, { Component } from "react";
import { connect } from "react-redux";

class NavbarOverlay extends Component {
  render() {
    return (
      <div
        className={this.props.isShowNavbar ? "navbar-overlay" : "navbar-overlay hide"}
        onClick={() => {
          this.props.dispatch({
            type: "HIDE_NAVBAR",
          });
        }}
      ></div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    isShowNavbar: rootReducer.navbarReducer.isShowNavbar,
  };
};

export default connect(mapStateToProps)(NavbarOverlay);
