import React from 'react';
import './DetailItem.css';

const DetailItem = ({ title, genre, img, link }) => {
  

  return (
    <div className="detail-item">
      <h1>{title}</h1>
      <h2>{genre}</h2>
      {img ? (
        <img src={img} alt={`${title} poster`} />
      ) : (
        <div>No image available</div>
      )}
      <div className="iframe-container">
        <iframe
          src={link}
          title={title}
          className="scaled-iframe"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DetailItem;