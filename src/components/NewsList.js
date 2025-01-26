import React from "react";
import NewsItem from "./NewsItem";
import "./NewsList.css";
import Header from "./Header";
import news1 from '../imgs/news1.jpg';

const sampleNews = [
  {
    id: 1,
    title: "영화 '타짜' 속편 공개 예정 없다",
    summary: "영화 '타짜'의  속편이 이제 없다고한다!",
    date: "2006-05-29",
    externalUrl: "https://m.entertain.naver.com/article/109/0000034832",
  },
  {
    id: 2,
    title: "천장에도 화면이…4면 스크린 영화관 등장",
    summary: "CGV가 자회사인 CJ 4DPLEX와 협력해 전 세계 최초로 4면 스크린으로 확장된 상영관을 선보인다.",
    date: "2025-01-23",
    externalUrl: "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202501230578&t=NNv",
  },
  {
    id: 3,
    title: "‘손석구·최희서’ 할리우드 영화 ‘베드포드 파크’ 캐스팅",
    summary: "배우 손석구와 최희서가 할리우드 영화에 도전합니다.",
    date: "2025-01-22",
    externalUrl: "https://news.kbs.co.kr/news/pc/view/view.do?ncd=8158318&ref=A",
  },
];

const NewsList = () => {
  return (
    <div>
      <Header />
      <h2>Movie News</h2>
      <div className="banner">
        <img
          src={news1}
          alt="News Banner"
          className="news-banner"
        />
      </div>
      <ul className="news-list">
        {sampleNews.map((news) => (
          <NewsItem key={news.id} {...news} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
