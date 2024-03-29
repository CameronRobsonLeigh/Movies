import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MostPopularMovies from './components/MostPopularMovies/MostPopularMovies';

function App() {
  return (
    <div>
      <Header />
      <MostPopularMovies />
    </div>
  );
}

export default App;
