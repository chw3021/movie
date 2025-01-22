import { useState } from "react";
import QnaItem from "./QnaItem";
import "./QnaList.css";

const QnaList = () => {
    const [qnaData, setQnaData] = useState([
        { question: "영화 페이지 만든사람", answer: "강은교, 차현욱, 황회순" },
        { question: "만들어진 이유", answer: "팀프로젝트" },
        { question: "Q내용", answer: "A내용" },
    ]);

    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");

    const handleAddQna = () => {
        if (newQuestion.trim() && newAnswer.trim()) {
            setQnaData([...qnaData, { question: newQuestion, answer: newAnswer }]);
            setNewQuestion("");
            setNewAnswer("");
        }
    };

    return (
        <div className="qna-list">
            <h1>Q&A</h1>
            <div className="qna-form">
                <input
                    type="text"
                    placeholder="질문 입력"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="답변 입력"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                />
                <button onClick={handleAddQna}>추가</button>
            </div>
            <div className="qna-items">
                {qnaData.map((item, index) => (
                    <QnaItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
};

export default QnaList;
