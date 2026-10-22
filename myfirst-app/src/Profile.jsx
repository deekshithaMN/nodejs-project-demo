import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Profile() {
    const[profile,setProfile]=React.useState(null)
    React.useEffect(()=>{
        axios.get('http://65.2.137.11:3000/profile')
        .then(data=>{setProfile(data.data);console.log(data.data)})
        .catch(err=> console.log(err))
    },[]);
    function handleUpdate(e){
        
        setProfile(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
  return (
    <div className=" ">
        {profile?(
            <div>
                <img src={profile.image_url} className="rounded-circle" alt="profile" />
                <h5> {profile.username}</h5>
                <input type="text"
            value={profile.username}
            name="username"
            className= "form-control my-4"
            onChange={handleUpdate}
            />
            <input type="text"
            value={profile.image_url}
            name="image" 
            className="form-control my-4"
            onChange={handleUpdate}
            />

            </div>
            
            
        ) : (
            <p> Loading...</p>
        )}


    </div>
  )
}

export default Profile