'use client'

import React, { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";

export default function PostCollection(props) {
  const [appointments, setAppointments] = useState([]);

  const { removePost } = props;

  const supabase = createClient('https://mvjhqesqlltxrfcvispp.supabase.co', process.env.API_KEY);

  // if (!supabase) {
  //   console.error('Failed to initialize Supabase client');
  // } else {
  //   console.log('Supabase client initialized successfully');
  // }

  // function removePostHandler(id) {
  //   props.removePost(id);
  // }

  useEffect(() => {
    getAppointments();
  }, []);

  async function getAppointments() {
    try {
      const { data } = await supabase.from("appointments").select();

      if (data && data.length > 0) {
        console.log("Appointments fetched successfully:", data);
        setAppointments(data);
      } else {
        console.log("No appointments found.");
      }

    } catch (error) {
      console.error("Error fetching appointments:", error.message);
    }
  }

  return (
    <section id="post-collection">
      {/* posts */}
      <div id="posts-container">
        {appointments && appointments.map((post) => {
            return (
              <article key={post.id} className="post bg-white p-6 mb-4 shadow rounded">
                <h2 className="post-title font-bold text-lg text-[#0e5f59]">{post.title}</h2>
                <h3 className="post-author">{post.author}</h3>
                <span className="post-date text-sm">{post.date}</span>
                <div className="post-body text-sm">{post.body}</div>
                <div className="w-full flex justify-end">
                  <button
                    className="btn btn--secondary flex items-center justify-center"
                  >
                  <svg className="mr-2" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
                    </svg>
                    <span className="font-bold" onClick={() => removePost(post.id)}>Remove</span>
                  </button>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}