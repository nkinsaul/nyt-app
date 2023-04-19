import {React, useEffect, useState} from "react";
import Story from '../Story/Story'

const Stories = ({news}) => {

  const mappedStories = news.map((story, index) => {
    return (
      <Story 
        key={index}
        title={story.title}
        abstract={story.abstract}
      />
    )
  })
  
  return (
    <div>
      {mappedStories}
    </div>
  )
}

export default Stories