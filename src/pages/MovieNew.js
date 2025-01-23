import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieDispatchContext } from '../App';
import Button from '../components/Button';

const MovieNew = () => {
  const { onCreate } = useContext(MovieDispatchContext);
  const [state, setState] = useState({
    title: "",
    genre: "",
    img: "",
    link: "",
  });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleChangeTitle = (e) => {
    setState({
      ...state,
      title: e.target.value,
    });
  };

  const handleChangeGenre = (e) => {
    setState({
      ...state,
      genre: e.target.value,
    });
  };

  const handleChangeLink = (e) => {
    setState({
      ...state,
      link: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const imgPath = data.filePath;

      onCreate(state.title, state.genre, imgPath, state.link);
      navigate('/');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>제목</h4>
        <div className="input_wrapper">
          <input
            type="text"
            value={state.title}
            onChange={handleChangeTitle}
            placeholder="제목 입력"
          />
        </div>
      </div>
      <div className="editor_section">
        <h4>장르</h4>
        <div className="input_wrapper">
          <input
            type="text"
            value={state.genre}
            onChange={handleChangeGenre}
            placeholder="장르 입력"
          />
        </div>
      </div>
      <div className="editor_section">
        <h4>링크</h4>
        <div className="input_wrapper">
          <input
            type="text"
            value={state.link}
            onChange={handleChangeLink}
            placeholder="링크 입력"
          />
        </div>
      </div>
      <div className="editor_section">
        <h4>파일 업로드</h4>
        <div className="input_wrapper">
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text={"취소"} onClick={() => navigate('/')} />
        <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default MovieNew;