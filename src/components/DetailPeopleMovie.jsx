import React, { Component } from "react";
import CardMovie from "./CardMovie.jsx";

export default class DetailPeopleMovie extends Component {
  render() {
    const { person } = this.props;
    return (
      <div className="dp-movie-person-cast-in">
        <h3 className="dp-movie-title">MOVIES</h3>
        {person.movie_credits.cast.map((movie, index) => {
          return <CardMovie movie={movie} key={index} />;
        })}
      </div>
    );
  }
}
