'use client';

import React, { useState } from 'react';
import PostSubmit from './PostSubmit'
import PostCollection from './PostCollection'
import Feed from './Feed'
import { getDate, getRandId } from '../../helpers';

export default function Appointments() {
  const [post, setPost] = useState({
    title: "",
    author: "",
    body: ""
  });

  const [key, setKey] = useState(false);

  function addPost(post) {
    setPost(post);
    clearInputs();
  }

  function removePost(id) {
    const filteredPosts = post.filter((post) => post.id !== id);
    setPost(filteredPosts);
  }

  function clearInputs() {
    setPost({
      title: "",
      author: "",
      body: ""
    });
    setKey(JSON.stringify(post));
  }

  return (
    <div id="appointments" key={key}>
      <Feed>
        <PostCollection
          posts={post}
          removePost={removePost}
        />
        <PostSubmit addPost={addPost} clearInputs={clearInputs} post={post} setPost={setPost} />
      </Feed>
    </div>
  );
}
