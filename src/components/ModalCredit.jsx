import React, { Component } from "react";
import { connect } from "react-redux";
import CardCastForModal from "./CardCastForModal";
import CardCrewForModal from "./CardCrewForModal";

class ModalCredit extends Component {
  render() {
    const { cast, crew, title } = this.props;

    if (!this.props.isShowModal) return <></>;
    return (
      <div className="mc-main">
        <div className="mc-modal">
          <div className="mc-title">{title} / Credits</div>
          <div className="mc-credit">
            <div className="mc-cast">
              <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                Cast
                <span style={{ marginLeft: 4 }}> ({cast.length})</span>
              </div>

              <div className="mc-cast-list">
                {cast.map((cast, index) => (
                  <CardCastForModal cast={cast} key={index} />
                ))}
              </div>
            </div>
            <div className="mc-crew">
              <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                Crew
                <span style={{ marginLeft: 4 }}> ({crew.length})</span>
              </div>
              <div className="mc-crew-list">
                {crew.map((crew, index) => (
                  <CardCrewForModal crew={crew} key={index} />
                ))}
              </div>
            </div>
          </div>
          <i
            className="fa-solid fa-xmark mc-close"
            onClick={() => {
              this.props.dispatch({
                type: "HIDE_MODAL",
              });
            }}
          ></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    isShowModal: rootReducer.modalReducer.isShowModal,
  };
};

export default connect(mapStateToProps)(ModalCredit);
