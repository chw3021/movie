import React, { useState } from 'react';
import './DetailItem.css';
import { FaStar } from 'react-icons/fa';

const DetailItem = ({ title, genre, img, link }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [username, setUsername] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() && username.trim()) {
      setComments([...comments, { username, comment, rating }]);
      setComment('');
      setUsername('');
      setRating(0);
    }
  };

  return (
    <div className="detail-item">
      <h1>{title}</h1>
      <h2>{genre}</h2>
      {img ? (
        <img src={img} alt={`${title} poster`} />
      ) : (
        <div>No image available</div>
      )}
      <div className="rating-section">
        <h3>별점</h3>
        <div className="stars">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => handleRatingChange(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  size={24}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
      </div>
      <div className="comments-section">
        <h3>댓글</h3>
        <input
          type="text"
          placeholder="사용자 이름"
          value={username}
          onChange={handleUsernameChange}
        />
        <textarea
          placeholder="댓글 작성"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button onClick={handleCommentSubmit}>작성</button>
        <div className="comments-list">
          {comments.map((cmt, index) => (
            <div key={index} className="comment">
              <div className="commentContents">
                <strong>{cmt.username}</strong>: {cmt.comment}
              </div>
              <div className="comment-rating">
                {[...Array(5)].map((star, i) => (
                  <FaStar
                    key={i}
                    className="star"
                    color={i < cmt.rating ? "#ffc107" : "#e4e5e9"}
                    size={16}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
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