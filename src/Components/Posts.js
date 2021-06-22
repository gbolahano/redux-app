import React, { Component } from "react";
// import { connect } from 'react-redux';
// import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  // No longer need constructor for state because it will be managed by redux(store/application state)
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //   };
  // }
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json()) // handling the promise from fetch, mapping the result to json
  //     .then((data) => this.setState({ posts: data })); // Filling/Setting the posts with data that comes in
  // }

  // componentDidMount(){
  //   // this.props.fetchPosts();
  //   // console.log(this.props);
  // }

  render() {
      // const postItems = this.state.posts.map( post => (
      //     <div key={post.id}>
      //         <h3>{post.title}</h3>
      //         <p>{post.body}</p>
      //     </div> // need a unique key to loop through something
      // ))
    return (
      <div>
        <h1> Posts </h1>
        {/* {postItems} */}
      </div>
    );
  }
}
// const

// export default connect(null, { fetchPosts })(Posts);
export default Posts;