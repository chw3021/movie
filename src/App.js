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
  },
  {
    id: 'mock2',
    title: '범죄와의 전쟁',
    genre: '느와르, 범죄',
    img: '/assets/imgs/범전.jpg',
  },
  {
    id: 'mock3',
    title: '양들의 침묵',
    genre: '스릴러',
    img: '/assets/imgs/양침.jpg',
  },
  {
    id: 'mock4',
    title: '조커',
    genre: '범죄, 스릴러, 피카레스크',
    img: '/assets/imgs/조커.jpg',
  },
  {
    id: 'mock5',
    title: '타짜',
    genre: '범죄, 스릴러, 드라마, 블랙코미디',
    img: '/assets/imgs/타짜.jpg',
  },
  {
    id: 'mock6',
    title: '파묘',
    genre: '오컬트, 미스터리, 공포',
    img: '/assets/imgs/파묘.jpg',
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


  const onCreate = (title, genre, img) => {
    dispatch({
      type: "CREATE",
      data: {
        id: `mock${idRef.current}`,
        title,
        genre,
        img,
      },
    });
    idRef.current += 1;
  }

  const onUpdate = (targetId, title, genre, img) =>{
    dispatch({
      type:"UPDATE",
      data: {
        id: targetId,
        title,
        genre,
        img,
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
