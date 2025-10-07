import React, { useState, useEffect, useCallback } from 'react';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import { getQuestionsByLevel, shuffleArray } from '../utils/gameLogic';
import '../styles/Quiz.css';

const Quiz = ({ level, onGameEnd, onBackToMenu }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const levelQuestions = getQuestionsByLevel(level.id);
    setQuestions(shuffleArray(levelQuestions).slice(0, level.questionsCount));
    setGameStarted(true);
  }, [level]);

  const handleTimeout = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      nextQuestion();
    } else {
      endQuiz();
    }
  }, [currentQuestion, questions.length]);

  const nextQuestion = useCallback(() => {
    setCurrentQuestion(prev => prev + 1);
    setShowResult(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
  }, []);

  const endQuiz = useCallback(() => {
    onGameEnd(score, questions.length);
  }, [onGameEnd, score, questions.length]);

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleTimeout();
    }
  }, [timeLeft, gameStarted, showResult, handleTimeout]);

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null || showResult) return;
    
    setSelectedAnswer(answer);
    const isCorrect = answer === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setShowResult(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        nextQuestion();
      } else {
        endQuiz();
      }
    }, 2000);
  };

  if (questions.length === 0) {
    return (
      <div className="loading">
        <div className="loading-animation">
          <div className="bouncing-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>🎮 Loading your awesome quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="quiz-header">
        <button className="back-button" onClick={onBackToMenu}>
          ← Back to Menu
        </button>
        <ScoreBoard 
          score={score}
          totalQuestions={questions.length}
          currentQuestion={currentQuestion + 1}
          timeLeft={timeLeft}
          level={level}
        />
      </div>

      <div className="quiz-content">
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <div className="progress-text">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          showResult={showResult}
          timeLeft={timeLeft}
          selectedAnswer={selectedAnswer}
        />
      </div>
    </div>
  );
};

export default Quiz;
