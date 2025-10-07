import React, { useState } from 'react';
import PlayerEntry from './components/PlayerEntry';
import LevelSelector from './components/LevelSelector';
import Quiz from './components/Quiz';
import GameOver from './components/GameOver';
import Leaderboard from './components/Leaderboard';
import './styles/App.css';

function App() {
  const [gameState, setGameState] = useState('playerEntry'); // playerEntry, levelSelect, playing, gameOver, leaderboard
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const handlePlayerReady = (playerData) => {
    setCurrentPlayer(playerData);
    setGameState('levelSelect');
  };

  const startGame = (level) => {
    setSelectedLevel(level);
    setScore(0);
    setGameState('playing');
  };

  const endGame = (finalScore, total) => {
    setScore(finalScore);
    setTotalQuestions(total);
    
    // Save score to localStorage (later we can use a real database)
    const scoreData = {
      name: currentPlayer.name,
      avatar: currentPlayer.avatar,
      score: finalScore,
      total: total,
      percentage: Math.round((finalScore / total) * 100),
      level: selectedLevel.id,
      levelName: selectedLevel.name,
      timestamp: new Date().toISOString()
    };
    
    const existingScores = JSON.parse(localStorage.getItem('quizMasterScores') || '[]');
    existingScores.push(scoreData);
    localStorage.setItem('quizMasterScores', JSON.stringify(existingScores));
    
    setGameState('gameOver');
  };

  const resetGame = () => {
    setGameState('levelSelect');
    setSelectedLevel(null);
    setScore(0);
    setTotalQuestions(0);
  };

  const showLeaderboard = () => {
    setGameState('leaderboard');
  };

  const backToMenu = () => {
    setGameState('levelSelect');
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="game-title">🎯 Quiz Master</h1>
        <div className="title-decoration">
          <span className="star">⭐</span>
          <span className="lightning">⚡</span>
          <span className="star">⭐</span>
        </div>
        {currentPlayer && gameState !== 'playerEntry' && (
          <div className="current-player">
            <span className="player-avatar">{currentPlayer.avatar}</span>
            <span className="player-name">Hey, {currentPlayer.name}!</span>
          </div>
        )}
      </header>

      {gameState === 'playerEntry' && (
        <PlayerEntry onPlayerReady={handlePlayerReady} />
      )}

      {gameState === 'levelSelect' && (
        <LevelSelector 
          onSelectLevel={startGame} 
          onShowLeaderboard={showLeaderboard}
          currentPlayer={currentPlayer}
        />
      )}

      {gameState === 'playing' && (
        <Quiz 
          level={selectedLevel} 
          onGameEnd={endGame}
          onBackToMenu={resetGame}
        />
      )}

      {gameState === 'gameOver' && (
        <GameOver 
          score={score}
          totalQuestions={totalQuestions}
          level={selectedLevel}
          currentPlayer={currentPlayer}
          onPlayAgain={resetGame}
          onShowLeaderboard={showLeaderboard}
        />
      )}

      {gameState === 'leaderboard' && (
        <Leaderboard 
          onBack={backToMenu}
          currentPlayer={currentPlayer}
        />
      )}
    </div>
  );
}

export default App;
