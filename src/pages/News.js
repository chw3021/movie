import React from "react";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
//import Image from 'react-dom'


const News =()=>{
    return(
        <div>
            <div>
                <Header />
                <h1>Movie News</h1>
                <NewsList />
            </div>
        </div>
    )

};

export default News;