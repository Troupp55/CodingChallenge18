import React, { useState } from 'react';

const RateMovieButton = ({ movie }) => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
    setSubmitted(true);
  };

  return (
    <div>
      <h3>Rate {movie}</h3>
      {submitted ? (
        <p>Thank you for rating {movie} with {rating} stars!</p>
      ) : (
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => handleRating(star)}>
              {star} {star === 1 ? 'Star' : 'Stars'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RateMovieButton;
