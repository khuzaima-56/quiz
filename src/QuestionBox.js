

const QuestionBox = ({handleClick, questionNo, qlist}) => {

    return (
      <section className="main">
        
        <article className="qBox">
          <div className="qNo">
            Question # {questionNo + 1}
            <span className="totalLength">/{qlist.length}</span>
          </div>

          <div className="question">{qlist[questionNo].Question}</div>

        </article>




        <article className="answerBox">
          {qlist[questionNo].Answer.map((q, index) => {
            return (
              <button
                key={index}
                className="answer"
                onClick={() => handleClick(q.isCorrect)}>
                {q.value}
              </button>
            );
          })}
        </article>
      </section>
    );
}

export default QuestionBox