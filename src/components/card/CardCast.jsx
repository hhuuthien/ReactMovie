import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { IMG_500_PREFIX } from "../../data/configData";
import CustomImage from "../CustomImage";

export default class CardCast extends Component {
  render() {
    const { cast } = this.props;
    return (
      <div className="cardcast-main">
        <Card fluid>
          <Card.Content className="content">
            <div className="poster">
              <CustomImage prefix={IMG_500_PREFIX} sublink={cast.profile_path} placeholderSrc="/img/placeholder.png" />
            </div>
            <div className="info">
              <div className="name">{cast.name}</div>
              <div className="character">{cast.character}</div>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
