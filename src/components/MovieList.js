import { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import MovieItem from "./MovieItem";

const sortOptionList = [
    { value: "전체", name: "전체" },
    { value: "제목", name: "제목" },
    { value: "장르", name: "장르" },
]


const MovieList = ({data}) =>{

    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState("");
    const [searchCategory, setSearchCategory] = useState("전체");
  
        useEffect(() => {
            handleFilter();
        }, [search, searchCategory]);
    
      const handleFilter = () => {
        if (search.trim() === "") {
          setFilteredData(data);
        } else {
          if (searchCategory === "전체") {
            setFilteredData(data.filter(movie => 
              movie.title.toLowerCase().includes(search.toLowerCase()) || 
              movie.genre.toLowerCase().includes(search.toLowerCase())
            ));
          } else if (searchCategory === "제목") {
            setFilteredData(data.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())));
          } else if (searchCategory === "장르") {
            setFilteredData(data.filter(movie => movie.genre.toLowerCase().includes(search.toLowerCase())));
          }
        }
      };
      const handleSearchChange = (e) => {
          setSearch(e.target.value);
      };
  
      const handleCategoryChange = (e) => {
          setSearchCategory(e.target.value);
      };

      const handleButtonClick = () => {
         handleFilter();
      };





    return(
        <div className="MovieList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <select value={searchCategory} onChange={handleCategoryChange}>
                        {sortOptionList.map((it,idx) => (
                            <option key={idx} value={it.value}>
                                {it.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="middle_col">
                    <input type="text" value={search} onChange={handleSearchChange} placeholder="검색어 입력" />
                </div>
                <div className="right_col">
                    <Button type={"positive"} 
                    text={"검색"}
                    onClick={handleButtonClick}/>
                </div>
            </div>
            <div className="list_wrapper">
                {filteredData.map(movie => (
                <MovieItem key={movie.id} {...movie} />
                ))}
            </div>
        </div>
    ) 
}

export default MovieList;