import { useState } from "react";
import "./QnaItem.css";

const QnaItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    // 클릭 시 상태를 토글하는 함수
    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="qna-item">
            <div className="question" onClick={toggleAnswer}>
                Q. {question}
            </div>
            {isOpen && (
                <div className="answer">
                    A. {answer}
                </div>
            )}
        </div>
    );
};

export default QnaItem;
