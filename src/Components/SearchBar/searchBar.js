import React from 'react';
import './searchBar.css';
const searchBar = () => {
    return <div className='searchbar-container'>
        <form className="form-inline">
          <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"/>
        </form>
    </div>
}

export default searchBar;