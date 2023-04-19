import {React, useEffect, useState} from "react";

const Stories = () => {
  const [news, setNews] = useState();
  const [error, setError] = useState();

  const getStories = () => {
    const url = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=dUHXsUzOQoAMZs5klSRIGW2cU4Bawp9g`
    return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(res)
      }
    })
    .catch(err => {
      setError(err)
    })
  }

  useEffect(() => {
    getStories()
    .then (data => setNews(data))  
  },[])

  return (
    <div>
      Stories
    </div>
  )
}

export default Stories