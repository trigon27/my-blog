import React, { useEffect, useState } from 'react'
import Posts from './Posts'


const IndexPages = () => {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch('https://mern-blog-backend-cfap.onrender.com/post').then(reponse=>{
      reponse.json().then(post=>{
        setPosts(post);
      })
    })
  },[])
  return (
    <div>
      {posts.length > 0 ? (
        posts.map(post => <Posts key={post._id} {...post} />)
      ) : (
        <h4 className='noBlogs'>No Blogs to show</h4>
      )}
    </div>
  )
}

export default IndexPages
