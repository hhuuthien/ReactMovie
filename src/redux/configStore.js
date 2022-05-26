import { combineReducers, createStore } from "redux";
import { movieReducer } from "./reducer/movieReducer";
import { navbarReducer } from "./reducer/navbarReducer";
import { modalReducer } from "./reducer/modalReducer";
import { searchReducer } from "./reducer/searchReducer";
import { peopleReducer } from "./reducer/peopleReducer";

const rootReducer = combineReducers({
  // reducer here
  movieReducer,
  navbarReducer,
  modalReducer,
  searchReducer,
  peopleReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
