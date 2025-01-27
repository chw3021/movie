import React from "react";
import "./NewsItem.css";

const NewsItem = ({ id, title, summary, date, externalUrl }) => {
  return (
    <li className="news-item">
      <h3>
        <a href={externalUrl} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p className="news-summary">{summary}</p>
      <p className="news-date">{date}</p>
    </li>
  );
};

export default NewsItem;
