import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { IMG_500_PREFIX } from "../../data/configData";
import CustomImage from "../CustomImage";

export default class CardCastCrew extends Component {
  renderCharacterOrJob(c, type) {
    if (type === "cast") {
      return <div className="character">{c.character}</div>;
    } else if (type === "crew") {
      return <div className="job">{c.job}</div>;
    }
  }

  render() {
    const { c, type } = this.props;
    return (
      <div className="cardcastcrew-main">
        <Card fluid>
          <Card.Content className="content">
            <div className="poster">
              <CustomImage prefix={IMG_500_PREFIX} sublink={c.profile_path} placeholderSrc="/img/placeholder.png" />
            </div>
            <div className="info">
              <div className="name">{c.name}</div>
              {this.renderCharacterOrJob(c, type)}
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
