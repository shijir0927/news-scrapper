import React from "react";

const NewsItem = ({author, title, url}) =>{
  return(
    <div className="news-item">
      <h1>{title}</h1>
      <p>URL: <a href={url} target="_blank">{url}</a></p>
      <p>By: {author}</p>
    </div>
  )
}

export default NewsItem;