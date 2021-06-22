import React, { useState } from "react";

const PostForm = () => {
  const [post, setPost] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1> Add Post </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Title: </label>
          <br />
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={post.title}
          />
        </div>
        <br />
        <div>
          <label> Body: </label>
          <br />
          <textarea name="body" onChange={handleChange} value={post.body} />
        </div>
        <br />
        {loading ? (
          <div>Saving....</div>
        ) : (
          <button type="submit"> Submit</button>
        )}
      </form>
    </div>
  );
};

export default PostForm;
