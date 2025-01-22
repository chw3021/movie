import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import useMovie from "../hooks/useMovie";
import { MovieDispatchContext } from "../App";
import MovieEditor from "../components/MovieEditor";

const MovieEdit = () =>{

    const {id} = useParams();
    const data = useMovie(id);
    const navigate = useNavigate();
    const {onDelete, onUpdate} = useContext(MovieDispatchContext);

    const goBack = () => {
        navigate(-1);
    };

    const onClickDelete = () => {
        if(window.confirm("영화를 정말 삭제할까요?")){
            onDelete(id);
            navigate("/", {replace:true});
        }
    }

    const onSubmit = (data) => {
        if(window.confirm("영화를 정말 수정할까요?")){
            const {title, genre, img} = data;
            onUpdate(id, title, genre, img);
            navigate("/",{replace:true});
        }
    }

    if(!data){
        return <div>영화를 읽어오는 중...</div>
    }
    else{
        return(
            <div>
                <MovieEditor initData={data} onSubmit={onSubmit}/>
                    
            </div>
        )
    }
};

export default MovieEdit;