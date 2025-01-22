import { useNavigate, useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import Header from "../components/Header";
import Button from "../components/Button";
import DetailItem from "../components/DetailItem";

const MovieDetail = () => {
    const {id} = useParams();
    const data = useMovie(id);
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1);
    };

    const goEdit = () => {
        navigate(`/movieEdit/${id}`);
    }
    
    if(!data){
        return <div>영화를 불러오고 있는 중...</div>
    }
    else{
        const {title,genre,img,link} = data;
        return (
            <div>
                <Header/>
                <Button text={"<뒤로 가기"} onClick={goBack}/>
                <Button text={"수정하기"} onClick={goEdit}/>
                <DetailItem title={title} genre={genre} img={img} link={link}/>
            </div>
        )
    }
}

export default MovieDetail;