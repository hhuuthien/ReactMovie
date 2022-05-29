import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";

export default class CustomPagination extends Component {
  render() {
    const { numPages, callAPI } = this.props;
    return (
      <Pagination
        nextItem={{
          content: ">",
        }}
        prevItem={{
          content: "<",
        }}
        defaultActivePage={1}
        totalPages={numPages <= 50 ? numPages : 50}
        firstItem={null}
        lastItem={null}
        boundaryRange={window.innerWidth > 768 ? 1 : 0}
        ellipsisItem={window.innerWidth > 768 ? "..." : null}
        onPageChange={(event, data) => {
          callAPI(data.activePage);
        }}
      />
    );
  }
}
