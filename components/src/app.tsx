import React from 'react';
import { SearchBar } from './components/searchBar';
import './styles/style.sass';

const App = () => {
  const i = 2;

  return (
    <div className="wrapper">
      <SearchBar />

      <h2>Hello World ${i}</h2>
    </div>
  );
};

export default App;
