import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"

function Notifications() {

     const [notifications, setNotifications] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:3000/notifications')
            .then(data => {
                setNotifications(data.data)
                console.log(data.data)
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div className="container mt-4">
        <h3 className="mb-4">Notifications</h3>

            {notifications.length > 0 ? (
                notifications.map((item) => (
                    <div
                        key={item.id}
                        className="card p-3 my-3 shadow-sm"
                    >
                        <div className="d-flex align-items-center">

                            <img
                                src={item.image_url}
                                alt="user"
                                className="rounded-circle me-3"
                                width="60"
                                height="60"
                            />

                            <div>
                                <h5>{item.title}</h5>
                                <p className="mb-1">{item.message}</p>
                                <small className="text-muted">
                                    {item.time}
                                </small>
                            </div>

                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}

        </div>

  )
}

export default Notifications