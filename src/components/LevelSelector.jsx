import React from 'react';
import '../styles/LevelSelector.css';

const LevelSelector = ({ onSelectLevel, onShowLeaderboard, currentPlayer }) => {
  const levels = [
    {
      id: 'easy',
      name: 'Easy Explorer',
      emoji: '🌟',
      color: '#4CAF50',
      description: 'Perfect for beginners!',
      questionsCount: 10
    },
    {
      id: 'medium',
      name: 'Smart Scholar',
      emoji: '🧠',
      color: '#FF9800',
      description: 'Challenge your knowledge!',
      questionsCount: 10
    },
    {
      id: 'hard',
      name: 'Genius Master',
      emoji: '🎓',
      color: '#F44336',
      description: 'For the brave minds!',
      questionsCount: 12
    }
  ];

  return (
    <div className="level-selector">
      <div className="selector-container">
        <div className="welcome-back">
          <h2 className="selector-title">Choose Your Adventure!</h2>
          <div className="player-greeting">
            <span>Ready to play, {currentPlayer.name}? {currentPlayer.avatar}</span>
          </div>
        </div>

        {/* EPIC TECH-SAVVY LEADERBOARD BUTTON */}
        <div className="action-buttons">
          <button className="leaderboard-button-tech" onClick={onShowLeaderboard}>
            <div className="button-background">
              <div className="tech-grid"></div>
              <div className="circuit-lines"></div>
            </div>
            <div className="button-content">
              <div className="icon-container">
                <div className="trophy-icon">🏆</div>
                <div className="holographic-effect"></div>
              </div>
              <div className="text-container">
                <span className="primary-text">LEADERBOARD</span>
                <span className="secondary-text">▲ HALL OF LEGENDS ▲</span>
              </div>
              <div className="tech-indicators">
                <div className="indicator active"></div>
                <div className="indicator active"></div>
                <div className="indicator"></div>
              </div>
            </div>
            <div className="hover-effect"></div>
            <div className="particle-system">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
          </button>
        </div>

        <div className="levels-grid">
          {levels.map((level) => (
            <div 
              key={level.id}
              className="level-card"
              style={{ '--level-color': level.color }}
              onClick={() => onSelectLevel(level)}
            >
              <div className="level-emoji">{level.emoji}</div>
              <h3 className="level-name">{level.name}</h3>
              <p className="level-description">{level.description}</p>
              <div className="level-info">
                <span className="questions-count">
                  📝 {level.questionsCount} Questions
                </span>
              </div>
              <button className="play-button">
                Play Now! 🚀
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelSelector;
