import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header'
import Stories from '../Stories/Stories'
import SearchBar from '../SearchBar/SearchBar'
import StoryView from '../StoryView/StoryView';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [focusStory, setFocusStory] = useState(0);
 
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
    <main>
      <Header />

      <Routes>

        <Route exact path='/' element={
          (loading) ? <h1>Loading...</h1> : 
            <>
              <SearchBar />
              <Stories news={news} setFocusStory={setFocusStory}/>
            </>}
        />

        <Route path='/story/:id' element={<StoryView news={news}/>} />

      </Routes>
    </main>
  );
}

export default App;
