'use client';

import React, { useState } from 'react'
import { getDate, getRandId } from '../../helpers';
import PlusButton from './../PlusButton'
import { createClient } from "@supabase/supabase-js";

export default function PostSubmit(props) {
  const [isOpen, setIsOpen] = useState(false);

  const { post, setPost, clearInputs, addPost } = props;

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

    addPost();
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

    addPost({
      post: newPost,
      id: newPost.id
    });

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
                <form className="block bg-white p-4">
                  <h3 className="text-xl mb-4">Add a New Appointment</h3>

                  <div className="relative z-0 w-full mb-5">
                    <input type="text" name="cc" placeholder=" " className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#0e2242] border-gray-200 font-sans"
                      onChange={(event) =>
                        setPost({ ...post, title: event.target.value })
                      }
                      value={post.title}
                      type="text"
                      id="title" />
                    <label htmlFor="cc" className="absolute duration-200 top-3 -z-1 origin-0 text-gray-500 text-base">Title</label>
                  </div>

                  <div className="relative z-0 w-full mb-5">
                    <input type="text" name="cc" placeholder=" " className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#0e2242] border-gray-200 font-sans"
                      onChange={(event) =>
                        setPost({ ...post, author: event.target.value })
                      }
                      value={post.author}
                      type="text"
                      />
                    <label htmlFor="cc" className="absolute duration-200 top-3 -z-1 origin-0 text-gray-500 text-base">Author</label>
                  </div>

                  <div className="relative z-0 w-full mb-5">
                    <input type="textarea" name="cc" placeholder=" " className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#0e2242] border-gray-200 font-sans"
                      onChange={(event) => setPost({ ...post, body: event.target.value })}
                      value={post.body}
                    />
                    <label htmlFor="cc" className="absolute duration-200 top-3 -z-1 origin-0 text-gray-500 text-base">Notes</label>
                  </div>

                  <button
                    className="bg-[#0e2242] hover:bg-[#89bfa3] mt-8 block text-center text-white px-4 py-2 text-sm font-bold"
                    onClick={() => addPostHandler(event)}
                    type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
