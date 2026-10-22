import React, { useEffect } from 'react'

function Posts() {
    const[posts,setPosts]=React.useState([]);
    useEffect(()=>{
        fetch('http://65.2.137.11:3000/posts').
        then((data)=>data.json()).
        then(data=>setPosts(data)).
        catch(err=>console.log(err))
    },[])
  return (
    <div className='d-flex justify-content-center'>
        {posts.length>0?(
            <div>
                {posts.map((post)=>(
                    <div className= 'my-3' key={post.id}>
                        <div className='d-flex'>
                        <img className='pic rounded-circle' src={post.profile_image} alt={post.caption}/>
                        <h5>{post.post_id}</h5>
                        </div>
                    <img src={post.image_url} alt="image"/>
                    <div> 
                        <i className="bi bi-heart"></i>
                         <i className="bi bi-chat"></i>
                          <i className="bi bi-send"></i>
                          </div>
                          <div>
                            <b>{post.likes} likes</b>
                            </div>
                            <div>
                            <p>{post.caption}</p>
                            </div>
                            <div>
                                <p>{post.comments}Comments</p>
                            </div>
                            </div>

                ))}
            </div>
        ):(
            <div>loading</div>
        )}
    </div>
  )
}

export default Posts