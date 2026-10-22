import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate=useNavigate()
  return (
    <div className='m-3 bi position-fixed'>
     <div className='d-flex flex-column gap-3'>
        <img className="log-text" src="src\assets\instatext.png" alt="" />
        <div><i className="bi bi-house-fill"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div onClick={()=>{navigate('/Reels')}}><i className="bi bi-camera-reels-fill"></i>Reels</div>
        <div onClick={()=>{navigate('/Explore')}}><i className="bi bi-compass"></i>Explore</div>
        <div onClick={()=>{navigate('/Notifications')}}><i className="bi bi-bell-fill"></i>Notification</div>
        <div onClick={()=>{navigate('/Messages')}}><i className="bi bi-chat-left"></i>Messages</div>
        <div><i className="bi bi-plus-lg"></i>Create</div>
        <div onClick={()=>{navigate('/Profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    <div className='d-flex flex-column gap-3 position-fixed bottom-0 mb-3'>
      <div><i className="bi bi-threads-fill"></i>Thread</div>
      <div><i className="bi bi-list"></i>More</div>
    </div>
  </div>
   
  )
}

export default Sidebar 