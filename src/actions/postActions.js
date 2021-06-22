import { FETCH_POSTS, NEW_POST } from "./types";

// export function fetchPosts(){}
export const fetchPosts = () => (dispatch) => {  // going to dispatch fetchPosts to the reducer 
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) =>
        dispatch({  
          type: FETCH_POSTS,
          payload: posts, // data thats coming into the reducer, we call payload
        })
      );
  };
};

