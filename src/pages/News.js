import React from "react";
import Header from "../components/Header";
import NewsList from "../components/NewsList";


const News =()=>{
    return(
        <div>
            <div>
                <Header />
                <h1>Movie News</h1>
               
                <NewsList />
                
            </div>
            <div>
              
            </div>
        </div>
    )

}

export default News;