const defaultState = {
  movieNowPlaying: [],
  movieNowPlaying_totalPages: 0,
  moviePopular: [],
  moviePopular_totalPages: 0,
  movieUpComing: [],
  movieUpComing_totalPages: 0,
  movieTopRated: [],
  movieTopRated_totalPages: 0,
  //
  movieLoadMorePages: [],
};

export const movieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_MOVIE": {
      return {
        ...state,
        movieNowPlaying: action.response[0].data.results,
        movieNowPlaying_totalPages: action.response[0].data.total_pages,
        moviePopular: action.response[1].data.results,
        moviePopular_totalPages: action.response[1].data.total_pages,
        movieUpComing: action.response[2].data.results,
        movieUpComing_totalPages: action.response[2].data.total_pages,
        movieTopRated: action.response[3].data.results,
        movieTopRated_totalPages: action.response[3].data.total_pages,
      };
    }
    case "LOAD_MOVIE_OTHER_PAGES": {
      return {
        ...state,
        movieLoadMorePages: action.data.results,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
