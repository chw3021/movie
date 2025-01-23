import { useContext } from "react";
import { MovieStateContext } from "../App";
import { useNavigate } from 'react-router-dom';
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Button from "../components/Button";


const Home = () => {

  const data = useContext(MovieStateContext);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Button text={"새 영화 추가"} onClick={() => navigate('/movieNew')} />
      <MovieList data = {data}/>
    </div>
  );
};

export default Home;
