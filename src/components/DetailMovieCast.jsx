import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import CardCast from "./card/CardCast";

export default class DetailMovieCast extends Component {
  state = {
    isModal: false,
  };

  render() {
    const { cast } = this.props;
    const castToRender = cast.slice(0, 5);
    return (
      <div className="dmcast-main">
        <div className="title">
          <Header as="h3">CASTS</Header>

          <Modal
            dimmer={"blurring"}
            onClose={() => this.setState({ isModal: false })}
            onOpen={() => this.setState({ isModal: true })}
            open={this.state.isModal}
            trigger={<Button color="blue" content="See all casts" />}
          >
            <Modal.Content scrolling>
              <div>
                {cast.map((c, i) => (
                  <CardCast cast={c} key={i} />
                ))}
              </div>
            </Modal.Content>
          </Modal>
        </div>
        <div>
          {castToRender.map((c, i) => (
            <CardCast cast={c} key={i} />
          ))}
        </div>
      </div>
    );
  }
}
