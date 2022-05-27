const defaultState = {
  movieNowPlaying: [],
  moviePopular: [],
};

export const movieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_MOVIE": {
      return {
        ...state,
        movieNowPlaying: action.response[0].data.results,
        moviePopular: action.response[1].data.results,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
