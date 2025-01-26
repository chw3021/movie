import React from "react";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
//import Image from 'react-dom'
import news1 from "../imgs/news1.jpg";


const News =()=>{
    return(
        <div>
            <div>
                <Header />
                <h1>📢 Movie News</h1>
                    <imgs src={news1} alt="news1" className="news1" />
                <NewsList />
            </div>
        </div>
    )

};

export default News;