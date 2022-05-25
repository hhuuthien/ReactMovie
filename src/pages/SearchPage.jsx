import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import CardMovieHorizontal from "../components/CardMovieHorizontal";
import { API_KEY, LANGUAGE, PREFIX } from "../data/configData";
import NavbarOverlay from "../components/NavbarOverlay";

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "HIDE_NAVBAR",
    });

    document.getElementById("sp-input").value = this.props.keyword;
  }

  handleChange = async (event) => {
    const { value } = event.target;
    if (value === "") {
      this.props.dispatch({
        type: "LOAD_SEARCH_RESULT",
        data: [],
        keyword: "",
      });
      return;
    }
    const url = `${PREFIX}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&page=1&include_adult=true&query=${value}`;
    try {
      const { data } = await axios.get(url);

      this.props.dispatch({
        type: "LOAD_SEARCH_RESULT",
        data: data.results,
        keyword: value,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    return (
      <>
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
            </div>
          </div>

          {this.props.keyword === null ? (
            <></>
          ) : (
            <div className="sp-result">
              {this.props.result.length !== 0 ? (
                this.props.result.map((result, index) => {
                  return <CardMovieHorizontal movie={result} key={index} history={this.props.history} />;
                })
              ) : (
                <div className="sp-result-empty">No results</div>
              )}
            </div>
          )}
        </div>
        <NavbarOverlay />
      </>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    result: rootReducer.searchReducer.result,
    keyword: rootReducer.searchReducer.keyword,
  };
};

export default connect(mapStateToProps)(SearchPage);
