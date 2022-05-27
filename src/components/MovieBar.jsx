import React, { Component } from "react";
import CardMovie from "./card/CardMovie";
import { Header } from "semantic-ui-react";

export default class MovieBar extends Component {
  render() {
    const { movieList, title } = this.props;
    if (!movieList || movieList.length === 0) return <></>;
    return (
      <div className="moviebar-main">
        <div className="moviebar-title">
          <Header as="h3">{title}</Header>
        </div>
        <div className="moviebar-list">
          {movieList.map((movie, index) => (
            <CardMovie movie={movie} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
