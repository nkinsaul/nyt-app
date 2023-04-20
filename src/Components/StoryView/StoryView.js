import React from "react";
import { useLocation } from "react-router";


const StoryView = ({news}) => {
  const location = useLocation();
  const id = location.pathname.split('/').slice(-1)[0]

  return (
    <h1>{news[id].title}</h1>
  )
}

export default StoryView