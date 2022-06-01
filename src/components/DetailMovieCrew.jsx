import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import CardCastCrew from "./card/CardCastCrew";

export default class DetailMovieCrew extends Component {
  state = {
    isModal: false,
  };

  render() {
    const { crew, title } = this.props;

    const director = crew.filter((c) => c.job === "Director");
    const otherCrews = crew.filter((c) => c.job === "Writer" || c.job === "Screenplay" || c.job === "Novel" || c.job === "Director of Photography");
    const crewToRender = [...director, ...otherCrews];

    return (
      <div className="dmcrew-main">
        <div className="title">
          <Header as="h3">CREWS</Header>

          <Modal
            className="dmcrew-main-modal"
            dimmer={"blurring"}
            onClose={() => this.setState({ isModal: false })}
            onOpen={() => this.setState({ isModal: true })}
            open={this.state.isModal}
            trigger={<Button color="blue" content="See all crews" />}
          >
            <Modal.Header>{title} / Crews</Modal.Header>
            <Modal.Content scrolling>
              <div>
                {crew.map((c, i) => (
                  <CardCastCrew c={c} key={i} type="crew" />
                ))}
              </div>
            </Modal.Content>
          </Modal>
        </div>
        <div>
          {crewToRender.map((c, i) => (
            <CardCastCrew c={c} key={i} type="crew" />
          ))}
        </div>
      </div>
    );
  }
}
