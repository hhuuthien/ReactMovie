const DEFAULT_STATE = {
  movieNowPlaying: [],
  movieUpComing: [],
  moviePopular: [],
  movieTopRated: [],
  //
  movieInDetail: {},
  movieInDetail_image: {},
  movieInDetail_video: {},
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
    case "LOAD_MOVIE_POPULAR": {
      return {
        ...state,
        moviePopular: action.data,
      };
    }
    case "LOAD_MOVIE_TOP_RATED": {
      return {
        ...state,
        movieTopRated: action.data,
      };
    }
    case "LOAD_DETAIL_MOVIE": {
      return {
        ...state,
        movieInDetail: action.data,
      };
    }
    case "LOAD_IMAGES": {
      return {
        ...state,
        movieInDetail_image: action.data,
      };
    }
    case "LOAD_VIDEOS": {
      return {
        ...state,
        movieInDetail_video: action.data,
      };
    }
    default:
      return { ...state };
  }
};
