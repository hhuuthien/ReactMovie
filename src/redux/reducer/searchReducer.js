const DEFAULT_STATE = {
  result: [],
  keyword: null,
};

export const searchReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "LOAD_SEARCH_RESULT": {
      return {
        ...state,
        result: action.data,
        keyword: action.keyword,
      };
    }
    default:
      return { ...state };
  }
};
