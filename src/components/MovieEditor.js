import React, { useState, useContext, useEffect } from 'react';
import { MovieDispatchContext } from '../App';
import { useNavigate } from "react-router-dom";
import Button from './Button';
import './MovieEditor.css';

const MovieEditor = ({ id, initData }) => {
  const {onUpdate} = useContext(MovieDispatchContext);

  const [state, setState] = useState({
    title: "",
    genre: "",
    img: initData.img,
    link: "",
  });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  
    useEffect(()=>{
      if(initData){
          setState({
            title: initData.title || "",
            genre: initData.genre || "",
            img: initData.img || "",
            link: initData.link || "",
          })
          
      }
   },[initData])


    const handlechangeTitle = (e) =>{
      setState({
          ...state,
          title: e.target.value,
      });
    };

  const handleChangeGenre =(e) => {
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

  const handleGoBack = () => {
    
    navigate(-1);

   };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
      if (!file) {
          alert('Please upload a file.');
          return;
      }

      const fileName = state.img.split('/').pop(); // 경로를 제거하고 파일명만 추출
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', fileName);
      console.log(fileName);

      try {
          if(window.confirm("영화를 정말 수정할까요?")){

              const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
              });
          
              const data = await response.json();
              const imgPath = data.filePath;
              
              onUpdate(id, state.title, state.genre, imgPath, state.link);
              navigate(`/movieDetail/${id}`);
          }
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
          onChange={handlechangeTitle}
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
      <Button text={"취소"} onClick={handleGoBack} />
      <Button text={"작성 완료"} type={"positive"} onClick={onSubmit} />
    </div>
  </div>
);
};

export default MovieEditor;