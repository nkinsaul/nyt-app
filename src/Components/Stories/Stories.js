import {React, useEffect, useState} from "react";
import Story from '../Story/Story'
import './Stories.css'

const Stories = ({news, setFocusStory}) => {

  const mappedStories = news.map((story, index) => {
    return (
      <Story 
        key={index}
        id={index}
        title={story.title}
        abstract={story.abstract}
        pictures={story.multimedia}
        setFocusStory={setFocusStory}
      />
    )
  })
  
  return (
    <div className="stories-grid">
      {mappedStories}
    </div>
  )
}

export default Stories