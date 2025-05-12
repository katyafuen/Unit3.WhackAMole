import { useGame } from "../context/GameContext";

export default function WelcomeScreen() {
  const { startGame, highScore } = useGame();

  return (
    <div className="welcome-screen">
      <h1>Whack a Mole!</h1>
      <div className="instructions">
        <h2>How to Play:</h2>
        <p>Click the mole as it appears in different holes.</p>
        <p>Each successful whack earns you 1 point!</p>
        {highScore > 0 && <p className="high-score">High Score: {highScore}</p>}
      </div>
      <button onClick={startGame} className="play-button">
        Play Game
      </button>
    </div>
  );
}
