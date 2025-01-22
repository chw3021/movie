import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieItem = ({ id, title, genre, img }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movieDetail/${id}`);
  };

  return (
    <div className="movie-item" onClick={handleClick}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{genre}</p>
    </div>
  );
};

export default MovieItem;