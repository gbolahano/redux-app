import { NEW_POST, LOADING } from "../actions/types";

const initialState = {
  items: [], // the posts that come from the action(the action will have the fetch request)
  item: {}, // represent the single post that we add when get the response back
  loading: false,
};

function foo(state = initialState, action) {
  switch (action.type) {
    case NEW_POST:
      return {
        ...state,
        items: action.payload,
        loading: false, // .payload from the data in fetchPosts
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default foo;
