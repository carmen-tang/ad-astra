'use client';

import React, { useState } from 'react'
import { getDate, getRandId } from '../../helpers';

export default function PostSubmit(props) {
  const [post, setPost] = useState({
    title: "",
    author: "",
    body: ""
  });

  function addPostHandler(event) {
    event.preventDefault();

    const { title, author, body } = post;

    if (!title || !author || !body) return;

    const newPost = {
      id: getRandId(),
      title,
      author,
      posted: getDate(),
      body
    };

    props.addPost(newPost);
    clearInputs();
  }

  function clearInputs() {
    setPost({
      title: "",
      author: "",
      body: ""
    });
  }

  return (
    <section id="post-submit">
      <h2 className="title text-muted">Submit Post</h2>
      <div className="form-container">
        <form className="post-form">
          <input
            onChange={(event) =>
              setPost({ ...post, title: event.target.value })
            }
            value={post.title}
            type="text"
            placeholder="Title"
            id="title"
          />
          <input
            onChange={(event) =>
              setPost({ ...post, author: event.target.value })
            }
            value={post.author}
            type="text"
            placeholder="Author"
          />
          <textarea
            onChange={(event) => setPost({ ...post, body: event.target.value })}
            value={post.body}
            placeholder="Start typing..."
          ></textarea>
          <button
            onClick={() => addPostHandler(event)}
            className="btn btn--primary"
            type="submit"
          >
            + Add
          </button>
        </form>
      </div>
    </section>
  );
}
