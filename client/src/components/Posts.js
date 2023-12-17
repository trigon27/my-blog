import React from 'react'
import { formatISO9075 } from 'date-fns';
import {Link} from 'react-router-dom'

const Posts = ({title,content,summary,createdAt,cover,author,_id}) => {
  return (
    <div className="cart">
      <div className="cart_img">
        <Link to={`/post/${_id}`}>
      <img src={'https://mern-blog-backend-t0qk.onrender.com/' + cover} alt="image " />
        </Link>
      </div>
     
      <div className="cart_text">
        <Link to={`/post/${_id}`}>
      <h2>{title}</h2>
        </Link>
      <p className="details"> 
      <p href="" className="authur">{author.userName}</p>
      <time>{formatISO9075(new Date(createdAt))}</time>
      </p>
      <p className="summury">{summary}</p>
      </div>
    </div>
  )
}

export default Posts;