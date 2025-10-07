import React from 'react';

const ScoreBoard = ({ score, totalQuestions, currentQuestion, timeLeft, level }) => {
  const percentage = Math.round((score / (currentQuestion - 1)) * 100) || 0;
  
  return (
    <div className="scoreboard">
      <div className="score-item">
        <span className="score-label">Level:</span>
        <span className="score-value" style={{ color: level.color }}>
          {level.emoji} {level.name}
        </span>
      </div>
      
      <div className="score-item">
        <span className="score-label">Question:</span>
        <span className="score-value">{currentQuestion}/{totalQuestions}</span>
      </div>
      
      <div className="score-item">
        <span className="score-label">Score:</span>
        <span className="score-value">
          🏆 {score}/{Math.max(currentQuestion - 1, 0)}
        </span>
      </div>
      
      <div className="score-item">
        <span className="score-label">Accuracy:</span>
        <span className="score-value">{percentage}%</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
