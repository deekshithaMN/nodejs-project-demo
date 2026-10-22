import React from 'react'

function Stories() {
  const[story,setStory] = React.useState([]);
  React.useEffect(()=>{
    fetch('http://65.2.137.11:3000/story')
    .then(data => data.json())
    .then(data => setStory(data))
    .catch(err => console.log(err))
  },[])
  return (
    <div className='d-flex'>
      {story.length > 0 ?(
        story.map(story => (
          <div key={story.id} className='exp'>
            <div className='gradient-border'>
              <img src={story.profile_image} className='story-dp rounded-circle' alt="dp"/>
            </div>
            
            <p className='text-truncate' style={{width :"50px"}}>{story.username}</p>
          </div>
        ))
      ):(
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Stories