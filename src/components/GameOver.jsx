import React from 'react';

const GameOver = ({ score, totalQuestions, level, onPlayAgain }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return { emoji: '🏆', message: 'Outstanding! You are a Quiz Master!', color: '#FFD700' };
    if (percentage >= 80) return { emoji: '🎉', message: 'Excellent work! Keep it up!', color: '#4CAF50' };
    if (percentage >= 70) return { emoji: '👏', message: 'Great job! You did well!', color: '#2196F3' };
    if (percentage >= 60) return { emoji: '👍', message: 'Good effort! Practice more!', color: '#FF9800' };
    return { emoji: '💪', message: 'Keep trying! You will improve!', color: '#F44336' };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="game-over">
      <div className="game-over-container">
        <div className="game-over-header">
          <h2>🎯 Quiz Complete!</h2>
        </div>

        <div className="performance-card" style={{ borderColor: performance.color }}>
          <div className="performance-emoji">{performance.emoji}</div>
          <h3 className="performance-message">{performance.message}</h3>
          
          <div className="final-stats">
            <div className="stat-item">
              <span className="stat-label">Level Completed:</span>
              <span className="stat-value" style={{ color: level.color }}>
                {level.emoji} {level.name}
              </span>
            </div>
            
            <div className="stat-item">
              <span className="stat-label">Final Score:</span>
              <span className="stat-value">{score} / {totalQuestions}</span>
            </div>
            
            <div className="stat-item">
              <span className="stat-label">Accuracy:</span>
              <span className="stat-value" style={{ color: performance.color }}>
                {percentage}%
              </span>
            </div>
          </div>

          <div className="score-visualization">
            <div className="score-bar">
              <div 
                className="score-fill"
                style={{ 
                  width: `${percentage}%`,
                  backgroundColor: performance.color
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="game-over-actions">
          <button className="play-again-button" onClick={onPlayAgain}>
            🎮 Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
