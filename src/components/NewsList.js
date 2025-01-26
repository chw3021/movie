import './NewsList.css';
import NewsItem from './NewsItem';

//import { useState } from 'react';

const NewsList=()=>{

    return(
        <div className='news'>
            <h2>'파묘' 시사회 일정</h2>

            <div className='mainNews'>
              <div>
                국내 시사회 일정 역시 정해졌다. 언론 시사회 겸 무대인사 시사회가 2월 20일 롯데시네마 월드타워 점에서 열린다.
                22일 개봉인데 20일 시사회는 너무 늦은 거 아닌가? 라고 생각할 수 있겠지만 앞서 말했듯 장재현 감독이 베를린
                국제영화제에 참석하기에 귀국 후 최대한 빨리 만날 수 있는 일정을 조율한 것으로 보인다.
                군대에 있는 이도현 배우만 빼고 주연 3명 모두 참석한다고 하니 파묘를 기다리는 사람들에겐
                정말 좋은 기회가 될 것 같다.
              </div>
            </div>

            <NewsItem />

        </div>
    )

}

export default NewsList;