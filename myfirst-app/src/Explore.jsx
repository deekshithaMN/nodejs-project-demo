import React, { useEffect, useState } from "react"
import axios from "axios"

function Explore() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/explore`)
      .then((res) => {
        setPosts(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Explore</h2>

      <div className="row">

        {posts.length > 0 ? (
          posts.map((post) => (

            <div className="col-md-4 mb-4" key={post.id}>

              <div className="card shadow-sm h-100">

                <img
                  src={post.image}
                  alt="explore"
                  className="card-img-top"
                  height="250"
                  style={{ objectFit: "cover" }}
                />

                <div className="card-body">

                  <h5>{post.title}</h5>

                  <p className="text-muted">
                    {post.description}
                  </p>

                </div>

              </div>

            </div>

          ))
        ) : (
          <p>Loading...</p>
        )}

      </div>

    </div>
  )
}

export default Explore