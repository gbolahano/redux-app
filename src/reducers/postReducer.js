import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [], // the posts that come from the action(the action will have the fetch request)
  item: {} // represent the single post that we add when get the response back
};

function foo (state = initialState, action) {
    switch (action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload  // .payload from the data in fetchPosts 
            }
        default:
            return state;
    }
}

export default foo;