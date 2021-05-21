import React, { Component } from 'react';
import './style.css'
import PostCard from '../PostCard/index';


class Posts extends Component {
  render() {
    const { posts = [] } = this.props;
    return (
      <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
    );
  }
}

export default Posts;

/* export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);
 */