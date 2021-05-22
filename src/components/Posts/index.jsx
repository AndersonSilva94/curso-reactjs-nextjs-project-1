import React, { Component } from 'react';
import './style.css';
import PostCard from '../PostCard/index';
import PropTypes from 'prop-types';

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

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;

/* export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);
 */
