import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header'
import Stories from '../Stories/Stories'

const App = () => {
  const [news, setNews] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
 
  const getStories = async () => {
    const url = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=dUHXsUzOQoAMZs5klSRIGW2cU4Bawp9g'
    setError('')
    try {
      const response = await fetch(url)
      const data = await response.json()
      setNews(data.results)
      setLoading(false)
    } catch(error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getStories()
  },[])

  return (
    <>
    {loading ? <h1>Loading...</h1> : 
      <main>
        <Header />
        <Stories news={news}/>
      </main>
    }
    </>
  );
}

export default App;
