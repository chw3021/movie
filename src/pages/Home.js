import { useState, useContext, useEffect } from "react";
import { MovieStateContext } from "../App";
import MovieList from "../components/MovieList";


const Home = () => {

  const data = useContext(MovieStateContext);

  return (
    <div>
      <MovieList data = {data}/>
    </div>
  );
};

export default Home;
