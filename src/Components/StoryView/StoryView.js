import React from "react";
import { useLocation } from "react-router";
import './StoryView.css'


const StoryView = ({news}) => {
  const location = useLocation();
  const id = location.pathname.split('/').slice(-1)[0]

  return (
    <div className="storyView">
      <div className="infoCont">
        <h1 className="SVtitle">{news[id].title}</h1>
        <h2 className="SVabstract">{news[id].abstract}</h2>
      </div>
      <div className="imgCont">
        <img className="SVimg" src={news[id].multimedia[1].url}/>
      </div>
    </div>
  )
}

export default StoryView