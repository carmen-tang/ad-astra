export default function PostCollection(props) {
  function removePostHandler(id) {
    props.removePost(id);
  }

  return (
    <section id="post-collection">
      <h2 className="title text-muted">Recent Posts</h2>
      <div id="posts-container">
        {props.posts &&
          props.posts.map((post) => {
            return (
              <article key={post.id} className="post">
                <h2 className="post__title">{post.title}</h2>
                <h3 className="post__author text-muted">{post.author}</h3>
                <span className="post__date text-muted">{post.posted}</span>
                <div className="post__body">{post.body}</div>
                <button className="btn btn--primary">✏ Edit</button>
                <button
                  onClick={() => removePostHandler(post.id)}
                  className="btn btn--secondary"
                >
                  ❌ Remove
                </button>
              </article>
            );
          })}
      </div>
    </section>
  );
}