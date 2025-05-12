import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setMolePosition(Math.floor(Math.random() * 9));
  };

  const endGame = () => {
    setIsPlaying(false);
    if (score > highScore) {
      setHighScore(score);
    }
  };

  const whackMole = () => {
    setScore((prevScore) => prevScore + 1);
    // Move mole to a new random position
    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * 9);
    } while (newPosition === molePosition);
    setMolePosition(newPosition);
  };

  const value = {
    isPlaying,
    score,
    molePosition,
    highScore,
    startGame,
    endGame,
    whackMole,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
