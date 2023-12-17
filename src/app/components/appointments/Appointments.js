'use client';

import React, { useState } from 'react';
import PostSubmit from './PostSubmit'
import PostCollection from './PostCollection'
import Feed from './Feed'

export default function Appointments() {
  const [posts, setPosts] = useState([
    {
      id: getRandId(),
      title: "Post Title",
      author: "Author",
      posted: getDate(),
      body: "Placeholder content."
    },
    {
      id: getRandId(),
      title: "Post Title",
      author: "Author",
      posted: getDate(),
      body: "Placeholder content."
    }
  ]);
  const [isTransitioning, setTransition] = useState(false);

  function addPost(post) {
    setPosts([...posts, post]);
  }

  function removePost(id) {
    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  }

  function getDate() {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
  
    return `${day}.${month}.${year}`;
  }
  
  function getRandId() {
    return Math.floor(Math.random() * (100000 - 1) + 1);
  }

  /*
  function isTransitioning(transitionType) {
    transition ? transition : null;
  }
  */

  return (
    <div id="appointments">
      <Feed>
        <PostSubmit addPost={addPost} />
        <PostCollection
          posts={posts}
          removePost={removePost}
          isTransitioning={isTransitioning}
        />
      </Feed>
    </div>
  );
}
