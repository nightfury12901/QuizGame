import React, { useState } from 'react';
import '../styles/PlayerEntry.css';

const PlayerEntry = ({ onPlayerReady }) => {
  const [playerName, setPlayerName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🎮');

  const avatars = ['🎮', '🚀', '🌟', '🎯', '🏆', '🦄', '🎪', '🎨', '🎭', '🦸'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName.trim()) {
      onPlayerReady({
        name: playerName.trim(),
        avatar: selectedAvatar,
        timestamp: new Date().toISOString()
      });
    }
  };

  return (
    <div className="player-entry">
      <div className="entry-container">
        <div className="welcome-header">
          <h1 className="welcome-title">Welcome to Quiz Master! 🎯</h1>
          <div className="welcome-mascot">
            <div className="mascot-bounce">🎪</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="player-form">
          <div className="form-group">
            <label htmlFor="playerName" className="form-label">
              What's your name, quiz champion? 
            </label>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your awesome name!"
              className="name-input"
              maxLength={20}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Choose your avatar:</label>
            <div className="avatar-grid">
              {avatars.map((avatar) => (
                <button
                  key={avatar}
                  type="button"
                  className={`avatar-option ${selectedAvatar === avatar ? 'selected' : ''}`}
                  onClick={() => setSelectedAvatar(avatar)}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="start-button" disabled={!playerName.trim()}>
            <span>Let's Play! 🚀</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerEntry;
