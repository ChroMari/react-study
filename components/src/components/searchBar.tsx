import React from 'react';

import iconSearch from '../assets/svg/search.svg';
import iconFolder from '../assets/svg/folder.svg';
import iconBell from '../assets/svg/bell.svg';

const SearchBar = () => {
  return (
    <div className="search search__wrapper">
      <div className="search__inner">
        <img className="search__icon" src={iconSearch} alt="search icon" />
        <input className="search__input" type="text" placeholder="Search..."/>
      </div>
      <div className="search__inner">
      <div className="search__inner">
        <img className="search__icon" src={iconFolder} alt="folder icon" />
        <img className="search__icon" src={iconBell} alt="bell icon" />
        <img className="search__icon search__icon_notification" src={iconBell} alt="bell icon" />
      </div>
      <div className="search__inner">
        // img
        // p
      </div>
      </div>
    </div>)
};

export { SearchBar };
