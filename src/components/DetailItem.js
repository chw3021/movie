import React, { useEffect, useState } from 'react';
import './DetailItem.css';

const DetailItem = ({ title, genre, img, link }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(link);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const bodyContent = doc.querySelector('#bodyContent');
        setContent(bodyContent ? bodyContent.innerHTML : 'Content not available');
      } catch (error) {
        console.error('Error fetching content:', error);
        setContent('Error fetching content');
      }
    };

    fetchContent();
  }, [link]);

  return (
    <div className="detail-item">
      <h1>{title}</h1>
      <h2>{genre}</h2>
      <img src={img} alt={`${title} poster`} />
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      <a href={link} target="_blank" rel="noopener noreferrer">More Info</a>
    </div>
  );
};

export default DetailItem;