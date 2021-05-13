import './style.css'

export const PostCard = ({ post }) => {
  // console.log(props)
  const { title, body, cover } = post;
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-card">
        <h2> {title} </h2>
        <p> {body} </p>
      </div>
    </div>
  );
};
