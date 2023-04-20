import React, { useEffect, useState } from "react";
import './SearchBar.css'

const SearchBar = ({searchNews}) => {
  const [keyword, setKeyword] = useState();

  useEffect(() => {
    searchNews(keyword)
  },[keyword])

  return (
    <input 
      className="search-bar"
      type="search"
      placeholder="Search"
      onChange={e => setKeyword(e.target.value)}
    />
  )
}

export default SearchBar