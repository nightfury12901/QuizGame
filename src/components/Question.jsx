import React from 'react';

const Question = ({ question, onAnswer, showResult, timeLeft, selectedAnswer }) => {
  const handleAnswerClick = (answer) => {
    if (selectedAnswer !== null || showResult) return;
    onAnswer(answer);
  };

  const getButtonClass = (answer) => {
    if (!showResult) {
      return selectedAnswer === answer ? 'answer-button selected wiggle' : 'answer-button';
    }
    
    if (answer === question.correct) {
      return 'answer-button correct celebration';
    } else if (answer === selectedAnswer && answer !== question.correct) {
      return 'answer-button incorrect shake';
    }
    return 'answer-button disabled';
  };

  return (
    <div className="question-container">
      <div className="question-mascot">
        <div className="mascot-character">
          {timeLeft <= 10 ? '😰' : '🤔'}
        </div>
      </div>

      <div className="question-header">
        <div className={`timer ${timeLeft <= 10 ? 'warning pulse-warning' : 'pulse-normal'}`}>
          ⏰ {timeLeft}s
        </div>
      </div>
      
      <div className="question-text">
        <div className="question-bubble">
          <h3>{question.question}</h3>
        </div>
      </div>

      <div className="answers-grid">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className={getButtonClass(answer)}
            onClick={() => handleAnswerClick(answer)}
            disabled={showResult}
          >
            <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
            <span className="answer-text">{answer}</span>
            <span className="answer-emoji">
              {showResult && answer === question.correct ? '✅' : 
               showResult && answer === selectedAnswer && answer !== question.correct ? '❌' : ''}
            </span>
          </button>
        ))}
      </div>

      {showResult && (
        <div className={`result-feedback ${selectedAnswer === question.correct ? 'correct' : 'incorrect'} fade-in`}>
          {selectedAnswer === question.correct ? (
            <div className="feedback-content">
              <span className="feedback-emoji bounce-in">🎉</span>
              <span className="feedback-text">Awesome! You got it right!</span>
              <div className="confetti">
                <span>🎊</span><span>✨</span><span>🌟</span><span>🎉</span>
              </div>
            </div>
          ) : (
            <div className="feedback-content">
              <span className="feedback-emoji shake">😅</span>
              <span className="feedback-text">Oops! The correct answer was: <strong>{question.correct}</strong></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
