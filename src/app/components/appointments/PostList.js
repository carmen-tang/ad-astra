export default function PostList(props) {
  console.log("transitioning: ", props.isTransitioning);

  return (
    <div id="list-container">
      <ul className="list">
        {props.posts.map((post) => {
          return (
            <li key={post.id} className="list__item">
              <a href="#" className="list__link">
                {post.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
