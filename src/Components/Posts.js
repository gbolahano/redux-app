import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Posts = () => {
  // utilize useDispatch hook to dispatch and action
  // utilize useSelector hook to select data from state
  // instead of using connect() which is a higher order function
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  // Similar to componentDidMount but uses React Hooks
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const postItems = () => {
    if (posts.loading) {
      return <div>Loading</div>;
    }
    // return first five posts
    // if you remove .slice(0, 5) it'll return 100 posts
    return posts.items.slice(0, 5).map((post) => (
      <div>
        <h3>{post.title}</h3>
      </div>
    ));
  };
  return (
    <div>
      <h1> Posts </h1>
      {postItems()}
    </div>
  );
};
export default Posts;
