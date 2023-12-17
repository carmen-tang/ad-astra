'use client'

import React, { useState } from 'react';

export default function PostCollection(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  function removePostHandler(id) {
    props.removePost(id);
  }

  return (
    <section id="post-collection">
      {/* posts */}
      <div id="posts-container">
        {props.posts &&
          props.posts.map((post) => {
            return (
              <article key={post.id} className="post bg-white p-6 mb-4 shadow rounded">
                <h2 className="post__title">{post.title}</h2>
                <h3 className="post__author text-muted">{post.author}</h3>
                <span className="post__date text-muted">{post.posted}</span>
                <div className="post__body">{post.body}</div>
                <div className="w-full flex justify-end">
                  <button
                    onClick={() => removePostHandler(post.id)}
                    className="btn btn--secondary flex items-center justify-center"
                  >
                  <svg className="mr-2" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
                    </svg>
                    <span className="font-bold">Remove</span>
                  </button>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}