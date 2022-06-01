import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import CardCastCrew from "./card/CardCastCrew";

export default class DetailMovieCast extends Component {
  state = {
    isModal: false,
  };

  render() {
    const { cast, title } = this.props;
    const castToRender = cast.slice(0, 5);
    return (
      <div className="dmcast-main">
        <div className="title">
          <Header as="h3">CASTS</Header>

          <Modal
            className="dmcast-main-modal"
            dimmer={"blurring"}
            onClose={() => this.setState({ isModal: false })}
            onOpen={() => this.setState({ isModal: true })}
            open={this.state.isModal}
            trigger={<Button color="blue" content="See all casts" />}
          >
            <Modal.Header>{title} / Casts</Modal.Header>
            <Modal.Content scrolling>
              <div>
                {cast.map((c, i) => (
                  <CardCastCrew c={c} key={i} type="cast" />
                ))}
              </div>
            </Modal.Content>
          </Modal>
        </div>
        <div>
          {castToRender.map((c, i) => (
            <CardCastCrew c={c} key={i} type="cast" />
          ))}
        </div>
      </div>
    );
  }
}
