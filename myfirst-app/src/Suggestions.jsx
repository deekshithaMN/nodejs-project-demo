import React from 'react'

function Suggestions() {
  const[profile,setProfile]=React.useState(null)
  const[suggestions,setSuggestions]=React.useState([]);
      React.useEffect(()=>{
          fetch('http://localhost:3000/profile').
          then((data)=>data.json()).
          then(data=>setProfile(data)).
          catch(err=>console.log(err))
      },[])

  React.useEffect(()=>{
          fetch('http://localhost:3000/suggestions').
          then((data)=>data.json()).
          then(data=>setSuggestions(data)).
          catch(err=>console.log(err))
      },[])
  return (
    <div>
      {profile ?
        <div className='d-flex w-75 m-3 suggestions'>
            <img className='pic rounded-circle' src={profile.pic_url} alt="Hi"/>
            <h5>{profile.username}</h5>
            <small className= 'ms-auto text-primary'>Switch</small>
            </div>
            :<p>Loading</p>}
            <div className='d-flex'>
              <p>Suggested For You</p>
              <b className='ms-auto'>See All</b>
            </div>
            {suggestions.length>0?(
              <div>
                {suggestions.map((suggestion)=>(
                  <div key = {suggestion.id}>
                    <div className = 'd-flex my-3'>
                    <img className ='pic rounded-circle' src={suggestion.profile_image} alt="hii"/>
                    <h5>{suggestion.username}</h5>
                    <p className='ms-auto text-primary'>Follow</p>
                    </div>
                    </div>
                ))}
                </div>
            ):(
              <div>No posts found</div>
            )}
    </div>
  )
}

export default Suggestions