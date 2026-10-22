import React, { useEffect, useState } from "react"
import axios from "axios"

function Reels() {

  const [reels, setReels] = useState([])

  useEffect(() => {
    axios
      .get("http://65.2.137.11:3000/reels")
      .then((res) => {
        setReels(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
 

  return (

    <div className="container mt-4">

      <h2 className="mb-4">Reels</h2>

      <div className=" ">

        {reels.length > 0 ? (
          reels.map((reel) => (

            <div className="col-md-4 mb-4" key={reel.id}>

              <div className="card shadow-sm">

                <video
                  controls
                  className="w-100"
                  height="400"
                >
                  <source
                    src={reel.video_url}
                    type="video/mp4"
                  />
                </video>

                <div className="card-body">

                  <h5>{reel.username}</h5>

                  <p className="text-muted">
                    {reel.caption}
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

export default Reels