const DEFAULT_STATE = {
  movieNowPlaying: [],
  movieUpComing: [],
  isShowModalMovie: false,
  movieInModalMovie: {},
};

export const movieReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "LOAD_MOVIE_NOW_PLAYING": {
      return {
        ...state,
        movieNowPlaying: action.data,
      };
    }
    case "LOAD_MOVIE_UP_COMING": {
      return {
        ...state,
        movieUpComing: action.data,
      };
    }
    case "TOGGLE_MODAL_MOVIE_ON": {
      return {
        ...state,
        isShowModalMovie: true,
        movieInModalMovie: action.movie,
      };
    }
    case "TOGGLE_MODAL_MOVIE_OFF": {
      return {
        ...state,
        isShowModalMovie: false,
        movieInModalMovie: {},
      };
    }
    default:
      return { ...state };
  }
};
