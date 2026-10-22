import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"


function Messages() {
    const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://65.2.137.11:3000/messages")
      .then((data) => {setMessages(data.data);console.log(data.data)})
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="container">

      <h2 className="mb-4">Messages</h2>

      {messages.length > 0 ? (
        messages.map((msg) => (
          <div key={msg.id} className="card p-3 mb-3 shadow-sm">

            <div className="d-flex align-items-center">

              <img
                src={msg.profile_image}
                alt="profile"
                width="60"
                height="60"
                className="rounded-circle"
              />

              <div className="ms-3">
                <h5>{msg.username}</h5>
                <p className="text-muted mb-0">
                  {msg.message}
                </p>
              </div>

            </div>

          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}

    </div>


  );
}

export default Messages






/*import React from 'react'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react"
import axios from 'axios'

function Messages() {
  const [messages, setMessages] = React.useState([null]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5173/messages")
      .then((data) => {setMessages(data.data);console.log(data.data)})
      .catch((err) => console.log(err));
  }, []);



  return (
    <div className=" ">
      <h2 className="mb-4">Messages</h2>

      {messages.map((messages) => (
        <div
          value={messages.id}
          className="card p-3 mb-3 shadow-sm"
        >
          <div className="d-flex align-items-center">
            <img
              src={messages.profile_image}
              alt="messages"
              width="60"
              height="60"
              className="rounded-circle"
            />

            <div className="ms-3">
              <h5>{messages.username}</h5>

              <p className="text-muted mb-0">
                {messages.message}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}*/

