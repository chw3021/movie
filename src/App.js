import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import MovieDetail from './pages/MovieDetail';
import MovieEdit from './pages/MovieEdit';
import Qna from './pages/Qna';
import React, { act, useEffect, useReducer, useRef, useState } from 'react';
import MovieNew from './pages/MovieNew';

export const MovieStateContext = React.createContext();
export const MovieDispatchContext = React.createContext();
const mockData = [
  {
    id: 'mock1',
    title: '범죄도시3',
    genre: '액션, 느와르, 범죄',
    img: '/assets/imgs/범도3.jpg',
    link: 'https://ko.wikipedia.org/wiki/%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C3',
  },
  {
    id: 'mock2',
    title: '범죄와의 전쟁',
    genre: '느와르, 범죄',
    img: '/assets/imgs/범전.jpg',
    link: 'https://ko.wikipedia.org/wiki/%EB%B2%94%EC%A3%84%EC%99%80%EC%9D%98_%EC%A0%84%EC%9F%81:_%EB%82%98%EC%81%9C%EB%86%88%EB%93%A4_%EC%A0%84%EC%84%B1%EC%8B%9C%EB%8C%80',
  },
  {
    id: 'mock3',
    title: '양들의 침묵',
    genre: '스릴러',
    img: '/assets/imgs/양침.jpg',
    link:'https://ko.wikipedia.org/wiki/%EC%96%91%EB%93%A4%EC%9D%98_%EC%B9%A8%EB%AC%B5',
  },
  {
    id: 'mock4',
    title: '조커',
    genre: '범죄, 스릴러, 피카레스크',
    img: '/assets/imgs/조커.jpg',
    link:'https://ko.wikipedia.org/wiki/%EC%A1%B0%EC%BB%A4_(2019%EB%85%84_%EC%98%81%ED%99%94)',
  },
  {
    id: 'mock5',
    title: '타짜',
    genre: '범죄, 스릴러, 드라마, 블랙코미디',
    img: '/assets/imgs/타짜.jpg',
    link:'https://ko.wikipedia.org/wiki/%ED%83%80%EC%A7%9C_(%EC%98%81%ED%99%94)',
  },
  {
    id: 'mock6',
    title: '파묘',
    genre: '오컬트, 미스터리, 공포',
    img: '/assets/imgs/파묘.jpg',
    link:'https://ko.wikipedia.org/wiki/%ED%8C%8C%EB%AC%98_(%EC%98%81%ED%99%94)',
  },
  {
    id: 'mock7',
    title: '김씨표류기',
    genre: '드라마',
    img: '/assets/imgs/김씨.jpg',
    link:'https://ko.wikipedia.org/wiki/%EA%B9%80%EC%94%A8_%ED%91%9C%EB%A5%98%EA%B8%B0',
  },
  {
    id: 'mock8',
    title: '라라랜드',
    genre: '드라마, 뮤지컬, 멜로/로맨스',
    img: '/assets/imgs/라라랜드.jpg',
    link:'https://ko.wikipedia.org/wiki/%EB%9D%BC%EB%9D%BC%EB%9E%9C%EB%93%9C',
  },
  {
    id: 'mock9',
    title: '비긴어게인',
    genre: '드라마, 멜로/로맨스, 코미디',
    img: '/assets/imgs/비긴.jpg',
    link:'https://ko.wikipedia.org/wiki/%EB%B9%84%EA%B8%B4_%EC%96%B4%EA%B2%8C%EC%9D%B8_(%EC%98%81%ED%99%94)',
  },
  {
    id: 'mock10',
    title: '엑시트',
    genre: '액션, 코미디',
    img: '/assets/imgs/엑시트.jpg',
    link:'https://ko.wikipedia.org/wiki/%EC%97%91%EC%8B%9C%ED%8A%B8_(%EC%98%81%ED%99%94)',
  },
  {
    id: 'mock11',
    title: 'E.T',
    genre: 'SF, 판타지, 가족, 모험',
    img: '/assets/imgs/ET.jpg',
    link:'https://ko.wikipedia.org/wiki/E.T.',
  },
  {
    id: 'mock12',
    title: '아바타',
    genre: '액션, 모험, SF, 스릴러',
    img: '/assets/imgs/아바타.jpg',
    link:'https://ko.wikipedia.org/wiki/%EC%95%84%EB%B0%94%ED%83%80:_%EB%AC%BC%EC%9D%98_%EA%B8%B8',
  },
];

function reducer(state,action){
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE":{
      return [action.data, ...state];
    }
    case "UPDATE":{
      return state.map((it)=>
        String(it.id) === String(action.data.id) ? {...action.data}:it
      );
    }
    case "DELETE":{
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default:
      return state;
  }
}


function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer,[]);
  const idRef = useRef(mockData.length + 1);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);


  const onCreate = (title, genre, img, link) => {
    dispatch({
      type: "CREATE",
      data: {
        id: `mock${idRef.current}`,
        title,
        genre,
        img,
        link,
      },
    });
    idRef.current += 1;
  }

  const onUpdate = (targetId, title, genre, img, link) =>{
    dispatch({
      type:"UPDATE",
      data: {
        id: targetId,
        title,
        genre,
        img,
        link,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if(!isDataLoaded){
    return <div>데이터 로딩중</div>
  }
  else{

    return (
      <MovieStateContext.Provider value={data}>
        <MovieDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/movieDetail/:id" element={<MovieDetail />} />
              <Route path="/qna" element={<Qna />} />
              <Route path="/movieEdit/:id" element={<MovieEdit />} />
              <Route path="/movieNew" element={<MovieNew />} />
            </Routes>
          </div>
        </MovieDispatchContext.Provider>
      </MovieStateContext.Provider>
    );
  }
}

export default App;
