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
      title: "Meeting with Galileo Galilei",
      author: "Author",
      posted: getDate(),
      body: "Discuss the stars and physics with Galileo"
    },
    {
      id: getRandId(),
      title: "Finish Collection Reports",
      author: "Author",
      posted: getDate(),
      body: "Review reports from clients and turn in final report to Neils Bohr"
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
        <PostCollection
          posts={posts}
          removePost={removePost}
          isTransitioning={isTransitioning}
        />
        <PostSubmit addPost={addPost} />
      </Feed>
    </div>
  );
}
