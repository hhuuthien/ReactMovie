import { combineReducers, createStore } from "redux";
import { movieReducer } from "./reducer/movieReducer";
import { navbarReducer } from "./reducer/navbarReducer";

const rootReducer = combineReducers({
  // reducer here
  movieReducer,
  navbarReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
