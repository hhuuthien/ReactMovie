const DEFAULT_STATE = {
  result: [],
};

export const searchReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "LOAD_SEARCH_RESULT": {
      return {
        ...state,
        result: action.data,
      };
    }
    default:
      return { ...state };
  }
};
