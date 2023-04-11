import { useState } from "react";
import QuestionBox from './QuestionBox'
import Retake from "./Retake";
import "./App.css";

const Quiz = ({ qlist }) => {
  const [questionNo, setQuestionNo] = useState(0);
  const [score, setScore] = useState(0);

  const handleClick = (isCorrect) => {
    if (isCorrect === "True") {
      const newScore = score + 10;
      setScore(newScore);
    }
    
    const newQ = questionNo + 1;
    setQuestionNo(newQ);
  };

  const retakeQuiz = () => {
    setQuestionNo(0);
    setScore(0);
  }

  return (
    <>
        {questionNo !== qlist.length ? (
          <QuestionBox handleClick = {handleClick} questionNo = {questionNo} qlist={qlist}/>
        ) : (
          <Retake retakeQuiz = {retakeQuiz} score= {score} totalScore={qlist.length * 10} />
        )}
    </>
  );
};
export default Quiz;
