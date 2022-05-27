import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  // reducer here
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
