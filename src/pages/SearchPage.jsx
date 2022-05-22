import React, { Component } from "react";
import { connect } from "react-redux";

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "HIDE_NAVBAR",
    });
  }

  render() {
    return (
      <div className="search-page">
        <div className="sp-container">
          <div className="ui action input sp-search">
            <input type="text" placeholder="Search..." className="sp-input" id="sp-input" />
            <br />
            <select className="ui compact selection dropdown sp-select">
              <option value="all">All</option>
              <option value="movies">Movies</option>
              <option value="people">People</option>
            </select>
            <div className="ui black button sp-button">Search</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(SearchPage);
