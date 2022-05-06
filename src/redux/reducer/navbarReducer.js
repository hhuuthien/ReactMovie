const DEFAULT_STATE = {
  isShowNavbar: true,
};

export const navbarReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_NAVBAR": {
      return {
        ...state,
        isShowNavbar: !state.isShowNavbar,
      };
    }
    default:
      return { ...state };
  }
};
