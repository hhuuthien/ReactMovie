import React, { Component } from "react";
import CardCrew from "./CardCrew";

export default class DetailMovieCrew extends Component {
  render() {
    const { crew } = this.props;
    console.log(crew);

    const listOfDirectors = crew.filter((crew) => crew.job === "Director");
    const listOfProducers = crew.filter((crew) => crew.job === "Producer");
    const listOfWriters = crew.filter((crew) => crew.job === "Writer");
    const listOfScreenplays = crew.filter((crew) => crew.job === "Screenplay");

    return (
      <div className="dm-crew">
        <h2 className="dm-crew-title">Crews</h2>
        <div className="dm-crew-list">
          {listOfDirectors.map((crew, index) => {
            return <CardCrew crew={crew} key={index} />;
          })}
          {listOfProducers.map((crew, index) => {
            return <CardCrew crew={crew} key={index} />;
          })}
          {listOfWriters.map((crew, index) => {
            return <CardCrew crew={crew} key={index} />;
          })}
          {listOfScreenplays.map((crew, index) => {
            return <CardCrew crew={crew} key={index} />;
          })}
        </div>
      </div>
    );
  }
}