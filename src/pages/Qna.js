import React from 'react';
//import QnaItem from '../components/QnaItem';
import QnaList from '../components/QnaList';
import Header from '../components/Header';

const Qna = () => {
    return (
        <div>
            <Header />
            <h1>Q&A Page</h1>
            <QnaList />
        </div>
    );
};

export default Qna;