import React, { Component } from 'react';
import './style.css'


class PostCard extends Component {
  render() {
    const { post = {} } = this.props;
    const  { title, body, cover} = post;
    return (
      <div className="post">
        <img src={cover} alt={title} />
        <div className="post-card">
          <h2> {title} </h2>
          <p> {body} </p>
        </div>
    </div>
    );
  }
}

export default PostCard;

/* export const PostCard = ({ post }) => {
  // console.log(props)
  const { title, body, cover } = post;
  return (
    
  );
};
 */