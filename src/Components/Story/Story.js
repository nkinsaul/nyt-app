import React from "react";
import { Link } from "react-router-dom";
import './Story.css'

const Story = ({id, title, abstract, pictures}) => {
  return (
    <div className="story">
      <Link to='/:id'>
        <img className="thumbnail" src={pictures[1].url}/>
      </Link>
      <h1 className="title">{title}</h1>
    </div>
  )
}

export default Story