//import { useState } from 'react';
import './NewsItem.css';
import {useNavigate} from 'react-router-dom'
// import Table from 'react-bootstrap/Table';

const NewsItem=(id, title, picture, content)=>{
    // const[news, setNews]=useState(); 
    const navigate=useNavigate();
    const goDetail=()=>{
        navigate(`/newsItem/${id}`);
    };
    const goBack=()=>{
        navigate(-1)
    }
    return(
        <div className="NewsItem">
        <div
            onClick={goDetail}
            className={["img_section", `img_section_${Image}`].join(" ")}
            >
            
        </div>
        <div onClick={goDetail} className="info_section">
            {/* <div className='date_wrapper'>
                {new Date(parseInt(date)).toLocaleDateString()}
            </div> */}
            {/* <div className='content_wrapper'>{content.slice(0, 25)}</div> */}
        </div>
        <div>
        <table striped bordered hover>
            <thead>
                <tr>
                <th>{title}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{picture}</td>
                </tr>
            <tr>
                <td>{content}</td>
                </tr>
            </tbody>
        </table>
        </div>
        <div className='button_section'>
                <button onClick={goBack} value="목록" />
        </div>
    </div>
    )

}

export default NewsItem;