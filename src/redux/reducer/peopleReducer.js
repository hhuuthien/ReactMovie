const DEFAULT_STATE = {
  detailPerson: {},
};

export const peopleReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "LOAD_DETAIL_PEOPLE": {
      return {
        ...state,
        detailPerson: action.data,
      };
    }
    default:
      return { ...state };
  }
};
