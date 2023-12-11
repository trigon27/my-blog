import React from 'react'
import { formatISO9075 } from 'date-fns';

const Posts = ({title,content,summary,createdAt,cover,author}) => {
  return (
    <div className="cart">
      <div className="cart_img">
      <img src={'http://localhost:4000/' + cover} alt="image " />
      </div>
     
      <div className="cart_text">
      <h2>{title}</h2>
      <p className="details"> 
      <a href="" className="authur">{author.userName}</a>
      <time>{formatISO9075(new Date(createdAt))}</time>
      </p>
      <p className="summury">{summary}</p>
      </div>
    </div>
  )
}

export default Posts;