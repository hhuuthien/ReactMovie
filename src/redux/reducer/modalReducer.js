const DEFAULT_STATE = {
  isShowModal: false,
};

export const modalReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "SHOW_MODAL": {
      return { ...state, isShowModal: true };
    }
    case "HIDE_MODAL": {
      return { ...state, isShowModal: false };
    }
    default:
      return { ...state };
  }
};
