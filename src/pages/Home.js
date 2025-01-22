import { useState, useContext, useEffect } from "react";
import { MovieStateContext } from "../App";
import MovieList from "../components/MovieList";
import Header from "../components/Header";


const Home = () => {

  const data = useContext(MovieStateContext);

  return (
    <div>
      <Header/>
      <MovieList data = {data}/>
    </div>
  );
};

export default Home;
