import { formatISO9075 } from "date-fns";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  if (!postInfo) return "";
  return (
    <div className="Post-Page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by {postInfo.author.userName}</div>
      <div className="image">
        <img src={`/${postInfo.cover}`} alt="" />
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
};

export default PostPage;
