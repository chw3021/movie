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
      <h2>CHK MOVIE NEWS +</h2>

      <div className="banner">
        <img
          src={news1}
          alt="News Banner"
          className="news-banner"
        />
        <h2>'파묘' 시사회 이벤트 일정</h2>
        <p>국내 시사회 일정 역시 정해졌다. 언론 시사회 겸 무대인사 시사회가 2월 20일 롯데시네마 월드타워 점에서 열린다. 22일 개봉인데 20일 시사회는 너무 늦은 거 아닌가? 라고 생각할 수 있겠지만 앞서 말했듯 장재현 감독이 베를린 국제영화제에 참석하기에 귀국 후 최대한 빨리 만날 수 있는 일정을 조율한 것으로 보인다. 군대에 있는 이도현 배우만 빼고 주연 3명 모두 참석한다고 하니 파묘를 기다리는 사람들에겐 정말 좋은 기회가 될 것 같다.</p>
      </div>

      <div className="news-list_wrapper">
        <h2>새로운 CHK 뉴스</h2>
        <ul className="news-list">
          {sampleNews.map((news) => (
            <NewsItem key={news.id} {...news} />
          ))}
          <hr />
        </ul>
        <hr />
      </div>

    </div>
  );
};

export default NewsList;
