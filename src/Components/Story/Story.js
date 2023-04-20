import React from "react";
import { Link } from "react-router-dom";
import './Story.css'

const Story = ({id, title, abstract, pictures, setFocusStory}) => {
  return (
    <div className="story">
      <Link to={`/story/${id}`} onClick={setFocusStory(id)}>
        <img className="thumbnail" src={pictures[1].url}/>
      </Link>
      <h1 className="title">{title}</h1>
    </div>
  )
}

export default Story