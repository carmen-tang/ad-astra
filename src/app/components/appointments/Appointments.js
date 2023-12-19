'use client';

import React, { useState } from 'react';
import PostSubmit from './PostSubmit'
import PostCollection from './PostCollection'
import Feed from './Feed'
import { createClient } from "@supabase/supabase-js";
import { getDate, getRandId } from '../../helpers';

export default function Appointments() {
  const [post, setPost] = useState({
    title: "",
    author: "",
    body: ""
  });

  const [key, setKey] = useState(false);

  const supabase = createClient('https://mvjhqesqlltxrfcvispp.supabase.co', process.env.API_KEY);

  function addPost(post, id) {
    setPost(post);
    clearInputs(id);
  }


  async function removePost(id) {
    console.log('here');
    console.log(id);

    const { error } = await supabase
    .from('appointments')
    .delete()
    .eq('id', id)

    clearInputs(id);
  }

  function clearInputs(id) {
    setPost({
      title: "",
      author: "",
      body: "",
    });
    setKey(JSON.stringify(getRandId()));
  }

  return (
    <div id="appointments" key={key}>
      <Feed>
        <PostCollection
          posts={post}
          removePost={removePost}
        />
        <PostSubmit addPost={addPost} clearInputs={clearInputs} post={post} setPost={setPost} removePost={removePost} />
      </Feed>
    </div>
  );
}
