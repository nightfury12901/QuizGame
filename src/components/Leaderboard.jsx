import React, { useState, useEffect } from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = ({ onBack, currentPlayer }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = () => {
    // For now, we'll use localStorage. Later we can connect to a real database
    const savedScores = JSON.parse(localStorage.getItem('quizMasterScores') || '[]');
    setLeaderboardData(savedScores.sort((a, b) => b.percentage - a.percentage));
  };

  const filteredData = leaderboardData.filter(entry => 
    filter === 'all' || entry.level === filter
  );

  const getRankEmoji = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return '🏅';
  };

  const getPerformanceEmoji = (percentage) => {
    if (percentage >= 90) return '🌟';
    if (percentage >= 80) return '🎉';
    if (percentage >= 70) return '👏';
    if (percentage >= 60) return '👍';
    return '💪';
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-container">
        <div className="leaderboard-header">
          <button className="back-button" onClick={onBack}>
            ← Back
          </button>
          <h2 className="leaderboard-title">🏆 Hall of Fame 🏆</h2>
        </div>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Levels
          </button>
          <button 
            className={`filter-btn ${filter === 'easy' ? 'active' : ''}`}
            onClick={() => setFilter('easy')}
          >
            🌟 Easy
          </button>
          <button 
            className={`filter-btn ${filter === 'medium' ? 'active' : ''}`}
            onClick={() => setFilter('medium')}
          >
            🧠 Medium
          </button>
          <button 
            className={`filter-btn ${filter === 'hard' ? 'active' : ''}`}
            onClick={() => setFilter('hard')}
          >
            🎓 Hard
          </button>
        </div>

        <div className="leaderboard-list">
          {filteredData.length === 0 ? (
            <div className="no-scores">
              <div className="empty-state">
                <span className="empty-emoji">🎮</span>
                <p>No scores yet! Be the first to play!</p>
              </div>
            </div>
          ) : (
            filteredData.slice(0, 10).map((entry, index) => (
              <div 
                key={`${entry.name}-${entry.timestamp}`}
                className={`leaderboard-item ${entry.name === currentPlayer?.name ? 'current-player' : ''}`}
              >
                <div className="rank">
                  <span className="rank-number">{index + 1}</span>
                  <span className="rank-emoji">{getRankEmoji(index)}</span>
                </div>
                
                <div className="player-info">
                  <div className="player-avatar">{entry.avatar}</div>
                  <div className="player-details">
                    <span className="player-name">{entry.name}</span>
                    <span className="player-level">{entry.levelName}</span>
                  </div>
                </div>

                <div className="score-info">
                  <div className="score-main">
                    <span className="score-value">{entry.score}/{entry.total}</span>
                    <span className="score-percentage">{entry.percentage}%</span>
                  </div>
                  <div className="performance-indicator">
                    {getPerformanceEmoji(entry.percentage)}
                  </div>
                </div>

                <div className="score-date">
                  {new Date(entry.timestamp).toLocaleDateString()}
                </div>
              </div>
            ))
          )}
        </div>

        {filteredData.length > 10 && (
          <div className="more-scores">
            <p>And {filteredData.length - 10} more amazing players! 🎉</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
