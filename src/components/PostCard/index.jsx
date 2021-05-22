import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class PostCard extends Component {
  render() {
    const { post = {} } = this.props;
    const { title, body, cover, id } = post;
    return (
      <div className="post">
        <img src={cover} alt={title} />
        <div className="post-card">
          <h2>
            {title}
            {id}
          </h2>
          <p> {body} </p>
        </div>
      </div>
    );
  }
}

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default PostCard;

/* export const PostCard = ({ post }) => {
  // console.log(props)
  const { title, body, cover } = post;
  return (

  );
};
 */
