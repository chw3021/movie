import { useState } from 'react';
import './NewsList.css';
import NewsItem from './NewsItem';
import img from "../imgs/news1";




const NewsList=()=>{
    const [news, setNews]=useState([
        { 
            picture: "",
            title: "파묘 시사회",

        }

    ])

    return(
        <div>
            <h3>NewsList</h3>
            <img src={img} alt="news1" className="news_img" />
            <p>파묘 시사회</p>

            <NewsItem />

        </div>
    )

}

export default NewsList;