import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>Cinema App</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/tvshows">TV Shows</a></li>
        <li><a href="/people">People</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
