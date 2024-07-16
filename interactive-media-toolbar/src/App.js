import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';
import MovieSelector from './MovieSelector';
import UploadButton from './UploadButton';
import './App.css';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState('Movie 1');
  const movies = ['Movie 1', 'Movie 2', 'Movie 3'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Media Toolbar</h1>
        <div className="toolbar">
          <MovieSelector movies={movies} onSelect={setSelectedMovie} />
          <RateMovieButton movie={selectedMovie} />
          <UploadButton />
        </div>
      </header>
    </div>
  );
};

export default App;
