import React, { Component } from "react";
import { Button, Header } from "semantic-ui-react";

class DetailMovieInfo extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="dminfo-main">
        <div className="title">
          <Header as="h3">INFO</Header>
        </div>
        <div className="content">
          <div className="i-group">
            <div className="i-title">Original Title</div>
            <div className="i-info">{movie.original_title || "No information"}</div>
          </div>
          <div className="i-group">
            <div className="i-title">Status</div>
            <div className="i-info">{movie.status || "No information"}</div>
          </div>
          <div className="i-group">
            <div className="i-title">Production Companies</div>
            <div className="i-info">
              {movie.production_companies.length === 0
                ? "No information"
                : movie.production_companies.map((com, index) => {
                    return <a key={index}>{com.name}</a>;
                  })}
            </div>
          </div>
          <div className="i-group">
            <div className="i-title">Production Countries</div>
            <div className="i-info">
              {movie.production_countries.length === 0
                ? "No information"
                : movie.production_countries.map((con, index) => {
                    return <div key={index}>{con.name}</div>;
                  })}
            </div>
          </div>
          <div className="i-group">
            <div className="i-title">Spoken Languages</div>
            <div className="i-info">
              {movie.spoken_languages.length === 0
                ? "No information"
                : movie.spoken_languages.map((lang, index) => {
                    return <div key={index}>{lang.english_name}</div>;
                  })}
            </div>
          </div>
          <div className="i-group">
            <div className="i-title">Budget</div>
            <div className="i-info">{movie.budget === null || movie.budget === "" || movie.budget === 0 ? "No information" : "$ " + movie.budget.toLocaleString()}</div>
          </div>
          <div className="i-group">
            <div className="i-title">Revenue</div>
            <div className="i-info">{movie.revenue === null || movie.revenue === "" || movie.revenue === 0 ? "No information" : "$ " + movie.revenue.toLocaleString()}</div>
          </div>
          <div className="i-group">
            <div className="i-title">Website</div>
            <div className="i-info">
              {movie.homepage === null || movie.homepage === "" ? (
                "No information"
              ) : (
                <a href={movie.homepage} target="_blank">
                  Click here
                </a>
              )}
            </div>
          </div>
          <div className="i-group">
            <div className="i-title">IMDB Website</div>
            <div className="i-info">
              {movie.imdb_id === null || movie.imdb_id === "" ? (
                "No information"
              ) : (
                <a href={"https://www.imdb.com/title/" + movie.imdb_id} target="_blank">
                  Click here
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailMovieInfo;
