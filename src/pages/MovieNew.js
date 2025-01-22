import { useContext } from "react";
import { MovieDispatchContext } from "../App";
import { useNavigate } from "react-router-dom"

const MovieNew = () =>{
    const onCreate = useContext(MovieDispatchContext);
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1);
    }

    const onSubmit = (data) => {
        const {date, content, emotionId} = data;
        onCreate(date, content, emotionId);
        navigate("/", {replace: true});
    }
};

export default MovieNew;