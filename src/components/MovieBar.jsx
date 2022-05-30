import React, { Component } from "react";
import { Button, Header } from "semantic-ui-react";
import CardMovie from "./card/CardMovie";

export default class MovieBar extends Component {
  render() {
    const { movieList, title } = this.props;
    if (!movieList || movieList.length === 0) return <></>;
    return (
      <div className="moviebar-main">
        <div className="moviebar-title">
          <Header as="h3">{title}</Header>
          <Button
            color="blue"
            content="See more"
            onClick={() => {
              switch (title) {
                case "MOVIES NOW PLAYING":
                  this.props.history.push("/list/l1");
                  break;
                case "POPULAR MOVIES":
                  this.props.history.push("/list/l2");
                  break;
                case "COMING SOON":
                  this.props.history.push("/list/l3");
                  break;
                case "TOP RATED MOVIES":
                  this.props.history.push("/list/l4");
                  break;
                default:
                  break;
              }
            }}
          />
        </div>
        <div className="moviebar-list">
          {movieList.map((movie, index) => (
            <CardMovie movie={movie} key={index} history={this.props.history} />
          ))}
        </div>
      </div>
    );
  }
}
