import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import './StoryView.css'


const StoryView = ({news}) => {
  const location = useLocation();
  const id = location.pathname.split('/').slice(-1)[0]

  const focusStory = news.find(story => {
    return story.published_date === id
  })

  return (
    <div className="storyView">
      <div className="infoCont">
        <h1 className="SVtitle">{focusStory.title}</h1>
        <h2 className="SVabstract">{focusStory.abstract}</h2>
        <Link to={`${focusStory.url}`}>
          <h3 className="SVlink">Full NYT Article</h3>
        </Link>
      </div>
      <div className="imgCont">
        <img className="SVimg" src={focusStory.multimedia[1].url}/>
      </div>
    </div>
  )
}

export default StoryView