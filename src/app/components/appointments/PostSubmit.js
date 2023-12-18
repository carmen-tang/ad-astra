'use client';

import React, { useState } from 'react'
import { getDate, getRandId } from '../../helpers';
import PlusButton from './../PlusButton'
import { createClient } from "@supabase/supabase-js";

export default function PostSubmit(props) {
  const [isOpen, setIsOpen] = useState(false);

  const { post, setPost, clearInputs } = props;

  const supabase = createClient('https://mvjhqesqlltxrfcvispp.supabase.co', process.env.API_KEY);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  async function postAppointments(event) {
    event.preventDefault();

    const { title, author, body } = post;

    const { error } = await supabase
    .from('appointments')
    .insert({ id: getRandId(),
      title,
      author,
      date: getDate(),
      body
    })
  }

  function addPostHandler(event) {
    event.preventDefault();

    const { title, author, body } = post;

    if (!title || !author || !body) return;

    const newPost = {
      id: getRandId(),
      title,
      author,
      data: getDate(),
      body
    };

    props.addPost(newPost);
    postAppointments(event);

    clearInputs();
  }

  return (
    <section id="post-submit" className="float-right">
      <div onClick={toggleModal}>
        <PlusButton size="lg" />
      </div>
      {/* modal */}
      {isOpen && (
        <div>
          <div id="modal-overlay" className="z-20 fixed top-0 left-0 w-full h-full bg-black-40" onClick={toggleModal}></div>

          <div id="modal" className="modal fixed max-w-full max-h-full z-30 flex flex-col rounded-lg bg-white closed shadow">
            <button className="text-white font-bold py-2 px-4 rounded z-10 absolute right-1 top-1" id="close-button" onClick={toggleModal}>
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
              </svg>
            </button>
            <div className="absolute left-0 top-0 w-full h-full overflow-auto">
              <div className="pt-8 px-4">
                <h2 className="text-xl font-semibold">Modal Info</h2>
                <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuorum.</p>
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
