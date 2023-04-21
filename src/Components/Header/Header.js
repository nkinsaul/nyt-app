import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to='/' className="header-link">
          New York Times
      </Link>
    </header>
  )
}

export default Header