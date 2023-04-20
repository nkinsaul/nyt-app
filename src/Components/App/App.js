import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';
import Header from '../Header/Header'
import Stories from '../Stories/Stories'
import SearchBar from '../SearchBar/SearchBar'
import StoryView from '../StoryView/StoryView';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [error, setError] = useState('');
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

  const searchNews = (keyword) => {
    const filterNews = news.filter(news => {
      return news.title.toLowerCase().includes(keyword) ||
      news.abstract.toLowerCase().includes(keyword)
    })
    setFilteredNews(filterNews)
  }

  useEffect(() => {
    getStories()
  },[])

  // useEffect(() => {
  //   localStorage.setItem('news', JSON.stringify(news))
  // },[news])

  return (
    <main>
      <Header />

      <Routes>

        <Route exact path='/' element={
          (loading) ? <h1>Loading...</h1> : 
          (error) ? <h1>Whoops somethings wrong</h1> :
            <>
              <SearchBar searchNews={searchNews}/>
              <Stories news={filteredNews.length > 0 ? filteredNews : news} />
            </>}
        />

        <Route path='/story/:id' element={<StoryView news={news}/>} />

      </Routes>
    </main>
  );
}

export default App;
