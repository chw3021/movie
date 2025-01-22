import React, { useState, useContext, useEffect } from 'react';
import { MovieDispatchContext } from '../App';
import { useNavigate, useParams } from "react-router-dom";
import Button from './Button';

const MovieEditor = ({ id, initData }) => {
  const {onDelete, onUpdate} = useContext(MovieDispatchContext);

  const [state, setState] = useState({
    title: "",
    genre: "",
    link: "",
  });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  
    useEffect(()=>{
      if(initData){
          setState({
              ...initData,
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
      e.preventDefault();

      if (!file) {
          alert('Please upload a file.');
          return;
      }

      const formData = new FormData();
      formData.append('file', file);

      try {
          if(window.confirm("영화를 정말 수정할까요?")){

              const response = await fetch('http://localhost:5000/upload', {
                  method: 'POST',
                  body: formData,
                  });
          
                  const data = await response.json();
                  const img = data.filePath;


              const {title, genre, link} = data;
              onUpdate(id, title, genre, img, link);
              navigate("/",{replace:true});
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