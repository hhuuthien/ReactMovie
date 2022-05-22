import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { API_KEY, LANGUAGE, PREFIX } from "../data/configData";

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "HIDE_NAVBAR",
    });
  }

  state = {
    keyword: "",
  };

  handleChange = (event) => {
    let { value } = event.target;
    this.setState(
      {
        keyword: value,
      },
      async () => {
        const url = `${PREFIX}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&page=1&include_adult=true&query=${this.state.keyword}`;
        try {
          const { data } = await axios.get(url);
          console.log(data);
        } catch (error) {
          console.log(error.response.data);
        }
      }
    );
  };

  render() {
    return (
      <div className="search-page">
        <div className="sp-container">
          <div className="ui action input sp-search">
            <input
              type="text"
              placeholder="Search..."
              className="sp-input"
              id="sp-input"
              onChange={(event) => {
                this.handleChange(event);
              }}
            />
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
