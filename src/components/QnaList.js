import QnaItem from "./QnaItem";

const QnaList = () => {
    const qnaData = [
        { question: "영화 페이지 만든사람", answer: "강은교, 차현욱, 황회순" },
        { question: "만들어진 이유", answer: "팀프로젝트" },
        { question: "Q내용", answer: "A내용" },
    ];

    return (
        <div>
            {qnaData.map((item, index) => (
                <QnaItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

export default QnaList;
