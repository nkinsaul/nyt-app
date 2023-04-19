import React from "react";
import './Story.css'

const Story = ({title, abstract, pictures}) => {
  return (
    <div className="story">
      <h1 className="title">{title}</h1>
      <img className="thumbnail" src={pictures[1].url}/>
    </div>
  )
}

export default Story