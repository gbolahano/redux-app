import { NEW_POST, LOADING } from "./types";

export const loading = () => ({ type: LOADING });

export const newPosts = (data) => ({ type: NEW_POST, payload: data });

// export function fetchPosts(){}
export const fetchPosts = () => (dispatch) => {
  // going to dispatch fetchPosts to the reducer
  dispatch(loading());
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      dispatch(newPosts(posts));
    });
};
