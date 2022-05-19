const DEFAULT_STATE = {
  isShowModal: false,
  whatToShow: "",
};

export const modalReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "SHOW_MODAL": {
      return { ...state, isShowModal: true, whatToShow: action.whatToShow };
    }
    case "HIDE_MODAL": {
      return { ...state, isShowModal: false, whatToShow: "" };
    }
    default:
      return { ...state };
  }
};
