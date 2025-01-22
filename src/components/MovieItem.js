import React from 'react';

const MovieItem = ({ id, title, genre, img }) => {
  return (
    <div className="movie-item">
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{genre}</p>
    </div>
  );
};

export default MovieItem;