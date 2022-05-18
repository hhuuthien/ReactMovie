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
    case "HIDE_NAVBAR": {
      return {
        ...state,
        isShowNavbar: false,
      };
    }
    case "SHOW_NAVBAR": {
      return {
        ...state,
        isShowNavbar: true,
      };
    }
    default:
      return { ...state };
  }
};
