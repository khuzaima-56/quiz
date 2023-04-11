
const Retake = ({ retakeQuiz,score, totalScore }) => {
    return (
      <section className="scoreBox">
        You Scored {score}/{totalScore} Points in this Quiz.
        <button className="retake" onClick={retakeQuiz}> 
          Retake
         </button>
      </section>
    );
}

export default Retake;