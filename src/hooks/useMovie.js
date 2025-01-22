import { useContext, useEffect, useState } from "react";
import { MovieStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useMovie = (id) => {
  const data = useContext(MovieStateContext);
  const [movie, setMovie] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    const matchMovie = data.find((it) => String(it.id)===String(id));
    if(matchMovie){
      setMovie(matchMovie);
    }
    else {
      alert("영화가 존재하지 않습니다");
      navigate("/", { replace: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, data]);

  return movie;
};


export default useMovie;