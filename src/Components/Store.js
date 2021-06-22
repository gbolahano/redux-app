import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers'


// const store = createStore(() => [], {}, applyMiddleware());

// const initialState = {};

// const middleware = [compose];

// const store = createStore(
//   rootReducer,
// //   initialState,
//   compose(applyMiddleware(thunk))
// );

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export default store;