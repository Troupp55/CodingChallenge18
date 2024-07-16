import React from 'react';

const MovieSelector = ({ movies, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {movies.map((movie) => (
        <option key={movie} value={movie}>
          {movie}
        </option>
      ))}
    </select>
  );
};

export default MovieSelector;
