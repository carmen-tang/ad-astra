'use client';

import React, { useState } from 'react';
import PostSubmit from './PostSubmit'
import PostCollection from './PostCollection'
import Feed from './Feed'
import { getDate, getRandId } from '../../helpers';

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
