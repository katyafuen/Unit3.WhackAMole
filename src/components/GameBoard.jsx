import { useGame } from "../context/GameContext";

export default function GameBoard() {
  const { score, molePosition, whackMole, endGame } = useGame();

  const holes = Array(9).fill(null);

  return (
    <div className="game-board">
      <div className="game-info">
        <div className="score">Score: {score}</div>
        <button onClick={endGame} className="restart-button">
          Restart
        </button>
      </div>
      <div className="holes-container">
        {holes.map((_, index) => (
          <div
            key={index}
            className={`hole ${index === molePosition ? "has-mole" : ""}`}
            onClick={() => index === molePosition && whackMole()}
          />
        ))}
      </div>
    </div>
  );
}
