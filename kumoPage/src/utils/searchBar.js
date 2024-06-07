import React, { useState } from 'react';
import './searchBar.css';

function SearchBar({ isVisible }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <div className={`searchContainer ${isVisible ? 'visible' : 'hidden'}`}>
      <input
        type="text"
        className={`searchBar ${isSearchVisible ? 'visible' : ''}`}
        style={{ paddingRight: isSearchVisible ? '40px' : '12px' }}
        placeholder="Search..."
      />
      <button className="searchIcon" onClick={toggleSearch}>
        <a href="#top" className="searchLogotype"><i className='bx bx-search-alt'></i></a>
      </button>
    </div>
  );
}

export default SearchBar;
