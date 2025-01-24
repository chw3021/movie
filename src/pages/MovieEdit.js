import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import useMovie from "../hooks/useMovie";
import { MovieDispatchContext } from "../App";
import MovieEditor from "../components/MovieEditor";
import Header from "../components/Header";
import Button from "../components/Button";

const MovieEdit = () =>{

    const {id} = useParams();
    const data = useMovie(id);
    const navigate = useNavigate();
    const {onDelete} = useContext(MovieDispatchContext);

    const goBack = () => {
        navigate(-1);
    };

    const onClickDelete = () => {
        if(window.confirm("영화를 정말 삭제할까요?")){
            navigate("/", {replace:true});
            onDelete(id);
        }
    }



    if(!data){
        return <div>영화를 읽어오는 중...</div>
    }
    else{
        return(
            <div>
                <Header/>
                <Button text={"<뒤로가기"} onClick={goBack}/>
                <MovieEditor id={id} initData={data}/>
                <Button
                        type={"negative"}
                        text={"삭제하기"}
                        onClick={onClickDelete}
                    />
            </div>
        )
    }
};

export default MovieEdit;