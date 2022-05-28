import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Header, Modal, Pagination } from "semantic-ui-react";
import { API_KEY, LANGUAGE, PREFIX, REGION } from "../data/configData";
import CardMovie from "./card/CardMovie";
import CardMovieHorizontal from "./card/CardMovieHorizontal";

class MovieBar extends Component {
  state = {
    isOpen: false,
    isDataFromPage1: true,
  };

  openModal() {
    this.setState({
      isOpen: true,
    });
  }

  closeModal() {
    this.setState({
      isOpen: false,
    });
  }

  callAPI = async (page) => {
    try {
      let url = "";
      if (this.props.title === "MOVIES NOW PLAYING") {
        url = `${PREFIX}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=${page}`;
      } else if (this.props.title === "POPULAR MOVIES") {
        url = `${PREFIX}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&page=${page}`;
      }
      const response = await axios.get(url);

      this.props.dispatch({
        type: "LOAD_MOVIE_OTHER_PAGES",
        data: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { movieList, title, numPages, movieLoadMorePages } = this.props;
    const realNumPages = numPages <= 15 ? numPages : 15;
    if (!movieList || movieList.length === 0) return <></>;
    return (
      <div className="moviebar-main">
        <div className="moviebar-title">
          <Header as="h3">{title}</Header>
          <Button inverted color="blue" content="See more" onClick={() => this.openModal()} />

          {/* ----- Modal ----- */}
          <Modal
            onClose={() => this.closeModal()}
            onOpen={() => this.openModal()}
            onMount={() => {
              this.setState({
                isDataFromPage1: true,
              });
            }}
            open={this.state.isOpen}
            dimmer="blurring"
            closeOnDimmerClick={false}
          >
            <Modal.Header>
              <Header as="h3">{title}</Header>
            </Modal.Header>
            <Modal.Content scrolling>
              {this.state.isDataFromPage1
                ? movieList.map((movie, index) => <CardMovieHorizontal movie={movie} key={index} />)
                : movieLoadMorePages.map((movie, index) => <CardMovieHorizontal movie={movie} key={index} />)}
            </Modal.Content>
            <Modal.Actions>
              <div className="modal-action">
                <Pagination
                  nextItem={{
                    "aria-label": "Next item",
                    content: ">",
                  }}
                  prevItem={{
                    "aria-label": "Previous item",
                    content: "<",
                  }}
                  defaultActivePage={1}
                  totalPages={realNumPages}
                  firstItem={null}
                  lastItem={null}
                  siblingRange={window.innerWidth > 768 ? 1 : 0}
                  boundaryRange={window.innerWidth > 768 ? 1 : 0}
                  ellipsisItem={window.innerWidth > 768 ? "..." : null}
                  onPageChange={(e, data) => {
                    this.setState({
                      isDataFromPage1: false,
                    });
                    this.callAPI(data.activePage);
                  }}
                />
                <Button inverted color="blue" content="Close" onClick={() => this.closeModal()} />
              </div>
            </Modal.Actions>
          </Modal>
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

const mapStateToProps = (rootReducer) => {
  return {
    movieLoadMorePages: rootReducer.movieReducer.movieLoadMorePages,
  };
};

export default connect(mapStateToProps)(MovieBar);
